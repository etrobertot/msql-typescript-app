import { Request, Response } from "express";

// DB
import { connect } from '../database'
// Interfaces
import { Author } from "../interface/Author";

export async function getAuthors(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const author = await conn.query('SELECT * FROM author');
        return res.json(author[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function createAuthor(req: Request, res: Response) {
    const newAuthor: Author = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO author SET ?', [newAuthor]);
    res.json({
        message: 'New Author Created'
    });
}


export async function getAuthor(req: Request, res: Response) {
    const dni = req.params.authorDni;
    const conn = await connect();
    const author = await conn.query('SELECT * FROM author WHERE dni = ?', [dni]);
    res.json(author[0]);
}

export async function deleteAuthor(req: Request, res: Response) {
    const dni = req.params.authorDni;
    const conn = await connect();
    await conn.query('DELETE FROM author WHERE dni = ?', [dni]);
    res.json({
        message: 'Author deleted'
    });
}

export async function updateAuthor(req: Request, res: Response) {
    const dni = req.params.authorDni;
    const updateAuthor: Author = req.body;
    const conn = await connect();
    await conn.query('UPDATE author set ? WHERE dni = ?', [updateAuthor, dni]);
    res.json({
        message: 'Author Updated'
    });
}

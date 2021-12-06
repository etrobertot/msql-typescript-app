"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAuthor = exports.deleteAuthor = exports.getAuthor = exports.createAuthor = exports.getAuthors = void 0;
// DB
const database_1 = require("../database");
function getAuthors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const author = yield conn.query('SELECT * FROM author');
            return res.json(author[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getAuthors = getAuthors;
function createAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newAuthor = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('INSERT INTO author SET ?', [newAuthor]);
        res.json({
            message: 'New Author Created'
        });
    });
}
exports.createAuthor = createAuthor;
function getAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const dni = req.params.authorDni;
        const conn = yield (0, database_1.connect)();
        const author = yield conn.query('SELECT * FROM author WHERE dni = ?', [dni]);
        res.json(author[0]);
    });
}
exports.getAuthor = getAuthor;
function deleteAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const dni = req.params.authorDni;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM author WHERE dni = ?', [dni]);
        res.json({
            message: 'Author deleted'
        });
    });
}
exports.deleteAuthor = deleteAuthor;
function updateAuthor(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const dni = req.params.authorDni;
        const updateAuthor = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE author set ? WHERE dni = ?', [updateAuthor, dni]);
        res.json({
            message: 'Author Updated'
        });
    });
}
exports.updateAuthor = updateAuthor;

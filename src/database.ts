import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'mysqldb',
        user: 'root',
        password: '123456',
        database: 'typescript_db',
        connectionLimit: 10
    });
    return connection;
}
import { DataSource } from 'typeorm'
import { db } from '../Configuration/DatabaseConfig'

export const connection = new DataSource(db);

connection.initialize().then(connection => {
    console.log("Successfully connected to PostgreSQL");
}).catch(err => {
    console.log("Error: ", err);
});

import { createConnection } from "mysql2";
export const query = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Node_Demo1',
    password: ''
})
const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE rooms 
        (id INTEGER PRYMARY KEY, pass TEXT
            )`);
        await db.exec(`CREATE TALBE questions 
        (id INTERGER PRIMARY KEY AUTO INCREMENT,
            titulo TEXT,
            read INT
            )`);

        await db.close();
    }
}
initDb.init();
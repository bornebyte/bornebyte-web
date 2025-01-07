"use server"
const { sql } = require("@vercel/postgres");

export const handleSaveNewNote = async (title, body, category) => {
    try {
        // const categoryArray = category
        //     .split(/(\s+)/)
        //     .filter((e) => e.trim().length > 0);

        await sql.query(`INSERT INTO notes (title, body, category, date, hidden) VALUES ('${title}', '${body}', '${category}', CURRENT_TIMESTAMP, false)`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Inserted notes");
    }
}
"use server"
const { sql } = require("@vercel/postgres");

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export async function getNotes() {
    try {
        const result = await sql`SELECT * FROM notes ORDER BY date DESC`;
        return result.rows.map((row) => ({
            ...row,
            date: formatDate(row.date),
        }));
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export const handleSaveNewNote = async (title, body) => {
    try {
        // const categoryArray = category
        //     .split(/(\s+)/)
        //     .filter((e) => e.trim().length > 0);
        const res = await sql.query(`INSERT INTO notes (title, body, category, date, hidden) VALUES ('${title}', '${body}', 'Null', CURRENT_TIMESTAMP, false) returning id`);
        const insertedID = res.rows[0].id
        const date = new Date().toLocaleString()
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note Added with id ${insertedID}', '${date}','noteadded','Note added')`);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("Inserted notes");
    }
}

export const handleDeleteNote = async (id) => {
    try {
        const res = await sql.query(`DELETE FROM notes WHERE id = ${id} returning id`);
        const deletedID = res.rows[0].id
        const date = new Date().toLocaleString()
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note deleted with id ${deletedID}', '${date}','notedeleted','Note deleted')`);
    } catch (error) {
        console.log(error.message);
    }
}


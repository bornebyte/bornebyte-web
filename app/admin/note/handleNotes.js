"use server"
const { sql } = require("@vercel/postgres");

export async function getNotes() {
    try {
        const result = await sql`SELECT * FROM notes ORDER BY created_at ASC`;
        return result.rows.map((row) => {
            if (!row.trash) {
                return row
            }
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export async function getTrashedNotes() {
    try {
        const result = await sql`SELECT * FROM notes ORDER BY created_at ASC`;
        return result.rows.map((row) => {
            if (row.trash) {
                return row
            }
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export async function getFavNotes() {
    try {
        const result = await sql`SELECT * FROM notes ORDER BY created_at ASC`;
        return result.rows.map((row) => {
            if (row.fav) {
                return row
            }
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export const handleSaveNewNote = async (title, body) => {
    try {
        const date = new Date().toLocaleString()
        const res = await sql.query(`INSERT INTO notes (title, body, category, created_at, lastupdated) VALUES ('${title}', '${body}', 'Null', '${date}', 'null') returning id`);
        const insertedID = res.rows[0].id
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note Added with id ${insertedID}', '${date}','noteadded','Note added')`);
    } catch (error) {
        console.log(error.message);
    }
}

export const handleDeleteNote = async (id, initial) => {
    try {
        if (!initial) {
            const res = await sql.query(`update notes set trash='true' WHERE id = ${id} returning id`);
            const deletedID = res.rows[0].id
            const date = new Date().toLocaleString()
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note trashed with id ${deletedID}', '${date}','notetrashed','Note trashed')`);
        } else {
            const res = await sql.query(`update notes set trash='false' WHERE id = ${id} returning id`);
            const deletedID = res.rows[0].id
            const date = new Date().toLocaleString()
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note recovered with id ${deletedID}', '${date}','notedrecovered','Note recovered')`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const handleFav = async (id, initial) => {
    try {
        if (!initial) {
            const res = await sql.query(`update notes set fav='true' WHERE id = ${id} returning id`);
            const deletedID = res.rows[0].id
            const date = new Date().toLocaleString()
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note added to favourite with id ${deletedID}', '${date}','noteaddedfav','Note Added Favoutite')`);
        } else {
            const res = await sql.query(`update notes set fav='false' WHERE id = ${id} returning id`);
            const deletedID = res.rows[0].id
            const date = new Date().toLocaleString()
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note removed from favourite with id ${deletedID}', '${date}','noteremovedfav','Note Removed Favoutite')`);
        }
    } catch (error) {
        console.log(error.message);
    }
}


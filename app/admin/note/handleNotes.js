"use server"

import { neon } from "@neondatabase/serverless";

// const { sql } = require("@vercel/postgres");


export async function getNotes() {
    const sql = neon(process.env.DATABASE_URL)
    try {
        const result = await sql`SELECT * FROM notes where trash=FALSE ORDER BY id DESC`;
        result.map((row) => {
            row.title = row.title.replaceAll("&apos;", "'");
            row.body = row.body.replaceAll("&apos;", "'");
        })
        return result;
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export async function getSearchNotes(query) {
    const sql = neon(process.env.DATABASE_URL)
    try {
        query = query.replaceAll("'", "&apos;");
        console.log("Searching for:", query);
        const result = await sql`SELECT * FROM notes WHERE (title ILIKE ${'%' + query + '%'} OR body ILIKE ${'%' + query + '%'}) AND trash=FALSE ORDER BY id DESC`;
        result.map((row) => {
            row.title = row.title.replaceAll("&apos;", "'");
            row.body = row.body.replaceAll("&apos;", "'");
        })
        return result;
    } catch (error) {
        console.error('Error fetching search notes:', error);
        return [];
    }
}

export async function getSharedNotes(shareid) {
    const sql = neon(process.env.DATABASE_URL)
    try {
        const result = await sql`SELECT * FROM notes where trash=FALSE and shareid=${shareid}`;
        result.map((row) => {
            row.title = row.title.replaceAll("&apos;", "'");
            row.body = row.body.replaceAll("&apos;", "'");
        })
        return result[0];
    } catch (error) {
        console.error('Error fetching shared notes:', error);
        return [];
    }
}

export async function getTrashedNotes() {
    const sql = neon(process.env.DATABASE_URL)
    try {
        const result = await sql`SELECT * FROM notes where trash=TRUE ORDER BY created_at ASC`;
        result.map((row) => {
            row.title = row.title.replaceAll("&apos;", "'");
            row.body = row.body.replaceAll("&apos;", "'");
        })
        return result
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export async function getFavNotes() {
    const sql = neon(process.env.DATABASE_URL)
    try {
        const result = await sql`SELECT * FROM notes where fav=TRUE and trash=FALSE ORDER BY created_at ASC`;
        result.map((row) => {
            row.title = row.title.replaceAll("&apos;", "'");
            row.body = row.body.replaceAll("&apos;", "'");
        })
        return result
    } catch (error) {
        console.error('Error fetching notes:', error);
        return [];
    }
}

export const handleUpdateNote = async (id, title, body) => {
    const sql = neon(process.env.DATABASE_URL)
    try {
        title = title.replaceAll("'", "&apos;");
        body = body.replaceAll("'", "&apos;");
        const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
        const res = await sql.query(`update notes set title='${title}',body='${body}',lastupdated='${date}' where id=${id} returning id`);
        const updatedID = res[0].id;
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note Updated with id ${updatedID}', '${date}','noteupdated','Note updated')`);
        if (updatedID) {
            return true;
        }
    } catch (error) {
        console.log("Handle Update Note function :", error.message);
        return null;
    }
}

export const handleSaveNewNote = async (title, body) => {
    const sql = neon(process.env.DATABASE_URL)
    try {
        title = title.replaceAll("'", "&apos;");
        body = body.replaceAll("'", "&apos;");
        const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
        const res = await sql.query(`INSERT INTO notes (title, body, category, created_at, lastupdated) VALUES ('${title}', '${body}', 'Null', '${date}', 'null') returning id`);
        const insertedID = res[0].id
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note Added with id ${insertedID}', '${date}','noteadded','Note added')`);
        if (insertedID) {
            return true;
        }
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export const handleDeleteNote = async (id, initial) => {
    const sql = neon(process.env.DATABASE_URL)
    try {
        if (!initial) {
            const res = await sql.query(`update notes set trash='true' WHERE id = ${id} returning id`);
            const deletedID = res[0].id
            const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note trashed with id ${deletedID}', '${date}','notetrashed','Note trashed')`);
        } else {
            const res = await sql.query(`update notes set trash='false' WHERE id = ${id} returning id`);
            const deletedID = res[0].id
            const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note recovered with id ${deletedID}', '${date}','notedrecovered','Note recovered')`);
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const handleFav = async (id, initial) => {
    const sql = neon(process.env.DATABASE_URL)
    try {
        if (!initial) {
            const res = await sql.query(`update notes set fav='true' WHERE id = ${id} returning id`);
            const deletedID = res[0].id
            const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note added to favourite with id ${deletedID}', '${date}','noteaddedfav','Note Added Favoutite')`);
        } else {
            const res = await sql.query(`update notes set fav='false' WHERE id = ${id} returning id`);
            const deletedID = res[0].id
            const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
            await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Note removed from favourite with id ${deletedID}', '${date}','noteremovedfav','Note Removed Favoutite')`);
        }
    } catch (error) {
        console.log(error.message);
    }
}
export const handleGenShareIDFunc = async (id) => {
    const sql = neon(process.env.DATABASE_URL)
    try {
        let shareid = Date.now().toString(36);
        const res = await sql.query(`update notes set shareid='${shareid}' WHERE id = ${id} returning shareid`);
        const shareID = res[0].shareid
        const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
        await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Share id created with id ${shareID}', '${date}','shareidcreated','Share ID Created')`);
        return shareID;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

export const handleNotesChartData = async () => {
    const sql = neon(process.env.DATABASE_URL)
    const data = await sql.query("select * from notes where trash=FALSE");

    let obj = [
        { month: "January", count: 0 },
        { month: "February", count: 0 },
        { month: "March", count: 0 },
        { month: "April", count: 0 },
        { month: "May", count: 0 },
        { month: "June", count: 0 },
        { month: "July", count: 0 },
        { month: "August", count: 0 },
        { month: "September", count: 0 },
        { month: "October", count: 0 },
        { month: "November", count: 0 },
        { month: "December", count: 0 }
    ]

    data.map((i) => {
        switch (i.created_at.split('/')[0]) {
            case "1":
                obj[0].count++;
                break;
            case "2":
                obj[1].count++;
                break;
            case "3":
                obj[2].count++;
                break;
            case "4":
                obj[3].count++;
                break;
            case "5":
                obj[4].count++;
                break;
            case "6":
                obj[5].count++;
                break;
            case "7":
                obj[6].count++;
                break;
            case "8":
                obj[7].count++;
                break;
            case "9":
                obj[8].count++;
                break;
            case "10":
                obj[9].count++;
                break;
            case "11":
                obj[10].count++;
                break;
            case "12":
                obj[11].count++;
                break;
        }
    })
    return obj;
}

export const getTotalNotesCount = async () => {
    const sql = neon(process.env.DATABASE_URL)
    const data = await sql.query("select * from notes where trash=FALSE");
    return data.length;
}

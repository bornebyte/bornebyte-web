"use server";
import { sql } from "@vercel/postgres";

export const addTargetDays = async (propsDate, propMessage) => {
    try {
        const today = new Date().toLocaleString();
        const res = await sql.query(`insert into targetdate (date, created_at, message) values ('${propsDate.toLocaleDateString()}', '${today}','${propMessage}') returning id`)
        return res.rows[0].id;
    } catch (error) {
        console.error("@app/admin/left/action.js")
        console.error("addTargetDays function failed: " + error)
        return null;
    }
}

export const getTargetDays = async () => {
    try {
        const res = await sql.query(`select * from targetdate`)
        res.rows.map((row) => {
            const today = new Date();
            const targetDate = new Date(row.date);
            const diffTime = targetDate - today;
            row.months = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30));
            row.days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            row.hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            row.minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            // console.log((`Days Left : ${diffDays} days ${diffHours} hours ${diffMinutes} minutes left until ${2025} ${3}st, ${23}`));
        });
        return res.rows
    } catch (error) {
        console.error("@app/admin/left/action.js")
        console.error("getTargetDays function failed: " + error)
        return [];
    }
}

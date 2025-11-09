"use server";

import { sql } from "@/lib/db";

export const addTargetDays = async (propsDate, propMessage) => {
    try {
        const today = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
        const res = await sql.query(`insert into targetdate (date, created_at, message) values ('${propsDate.toLocaleDateString()}', '${today}','${propMessage}') returning id`)
        return res[0].id;
    } catch (error) {
        console.error("@app/admin/left/action.js")
        console.error("addTargetDays function failed: " + error)
        return null;
    }
}

export const getTargetDays = async () => {
    try {
        const res = await sql.query(`SELECT * FROM targetdate`);
        
        let data = res.map((row) => {
            const today = new Date();
            const targetDate = new Date(row.date);
            const startDate = new Date(row.created_at); // Assuming there is a start_date in DB

            const totalDuration = targetDate - startDate;
            const elapsedTime = today - startDate;
            const remainingTime = targetDate - today;

            row.months = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30));
            row.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            row.hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            row.minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

            row.progressPercentage = totalDuration > 0 ? Math.min(100, Math.max(0, (elapsedTime / totalDuration) * 100)) : 0;
            row.progressPercentage = Math.floor(row.progressPercentage);

            return row;
        });
        return data;
    } catch (error) {
        console.error("@app/admin/left/action.js");
        console.error("getTargetDays function failed: " + error);
        return [];
    }
};


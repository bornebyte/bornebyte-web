"use server"
import { sql } from "@vercel/postgres";

export async function getNotifications() {
    const result = await sql.query("SELECT * FROM notifications ORDER BY created_at DESC LIMIT 20");
    let obj = [];
    let categorySet = new Set();
    let labelSet = new Set();
    result.rows.forEach(row => {
        categorySet.add(row.category);
        labelSet.add(row.label);
    })
    for (let category of categorySet) {
        obj.push({ category: category })
    }
    let c = 0;
    for (let label of labelSet) {
        obj[c].label = label;
        c++;
    }
    return [result.rows, obj];
}

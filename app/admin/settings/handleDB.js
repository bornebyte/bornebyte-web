"use server"

import { neon } from "@neondatabase/serverless";
// import { sql } from "@vercel/postgres";
import { AES } from "crypto-js";

export const handleChangePassword = async (newPassword) => {
    const sql = neon(process.env.DATABASE_URL);
    const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
    await sql.query(`INSERT INTO notifications (title, created_at, category, label) VALUES ('Admin Password Changed', '${date}','passwordchange','Password Change')`);
    const encryptedPass = AES.encrypt(newPassword, process.env.SESSION_SECRET).toString()
    const res = await sql.query(`update password set pass = '${encryptedPass}', last_updated='${date}' where id = 1 returning id`)
    console.log(res)
    return res[0].id;
}


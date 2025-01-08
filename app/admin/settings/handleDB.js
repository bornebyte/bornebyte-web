"use server"

import { sql } from "@vercel/postgres";
import { AES } from "crypto-js";

export const handleChangePassword = async (newPassword) => {
    const encryptedPass = AES.encrypt(newPassword, process.env.SESSION_SECRET).toString()
    const res = sql.query(`update password set pass = '${encryptedPass}' where id = 1`)
}


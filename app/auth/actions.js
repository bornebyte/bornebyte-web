"use server";

import { createSession, deleteSession } from "@/lib/session";
import { sql } from "@vercel/postgres";
import { AES, enc } from "crypto-js";
import { redirect } from "next/navigation";

export async function login(prevState, formData) {
    let encryptedPassword = await sql.query("SELECT pass FROM password")
    const realPassword = AES.decrypt(encryptedPassword.rows[0].pass, process.env.SESSION_SECRET).toString(enc.Utf8)
    if (formData.get("password") !== realPassword) {
        return {
            message: "Invalid Password",
        };
    }
    await createSession(encryptedPassword);
    redirect("/admin");
}

export async function logout() {
    await deleteSession();
    redirect("/auth");
}
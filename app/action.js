"use server";

import { sql } from "@/lib/db";

export async function saveMessage(name, email, message) {
    const nepaliTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" });
    const time = nepaliTime;
    try {
        await sql`INSERT INTO messages (name, email, message, time) VALUES (${name}, ${email}, ${message}, ${time})`;
        return {
            message: "Message saved successfully",
            success: true,
        };
    } catch (error) {
        console.error("Error saving message (app/action.js[SaveMessage Function]):", error);
        return {
            message: "Error saving message",
            success: false,
        };
    }
};

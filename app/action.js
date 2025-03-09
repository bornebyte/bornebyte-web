"use server";
const { sql } = require("@vercel/postgres");

export async function saveMessage(name, email, message) {
    // let name = formData.get("name")
    // let email = formData.get("email")
    // let message = formData.get("message")
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

"use server"

import { sql } from "@vercel/postgres"

export const getMessages = async () => {
    try {
        const messages = await sql`select * from messages`;
        return messages.rows;
    } catch (error) {
        console.error("Error saving message (app/admin/messages/action.js[GetMessages Function]):", error);
        return {
            message: "Error getting message"
        };
    }
}

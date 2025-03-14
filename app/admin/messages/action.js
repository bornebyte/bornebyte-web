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

export const handleMarkReadFunc = async (id) => {
    try {
        await sql`update messages set read=true where id=${id}`;
        return {
            message: "Message marked as read",
            success: true
        };
    } catch (error) {
        console.error("Error saving message (app/admin/messages/action.js[GetMessages Function]):", error);
        return {
            message: "Error getting message",
            success: false
        };
    }
}

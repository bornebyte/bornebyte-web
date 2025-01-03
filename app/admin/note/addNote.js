"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef, useState } from "react"
import { sql } from "@vercel/postgres"

export function AddNote() {
    const titleRef = useRef("")
    const bodyRef = useRef("")
    const categoryRef = useRef("")
    const [isSaving, setIsSaving] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const handleSaveNewNote = async () => {
        setIsSaving(true)
        setError(null)
        setSuccess(false)
        try {
            const categoryArray = categoryRef.current.value
                .split(/(\s+)/)
                .filter((e) => e.trim().length > 0);

            // Use sql.raw to properly handle the array
            // await sql`
            //     INSERT INTO notes (title, body, category, date, hidden) 
            //     VALUES (${titleRef.current.value}, ${bodyRef.current.value}, ${sql.raw(categoryArray)}, CURRENT_TIMESTAMP, false)
            // `;
            await sql`
                INSERT INTO notes (title, body, category, date, hidden) 
                VALUES ('Test 1', 'Body 1', ARRAY['Hello','Testing'], CURRENT_TIMESTAMP, false)
            `;
        } catch (error) {
            setError(error.message)
        } finally {
            setIsSaving(false)
            setSuccess(true)
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">New Note</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>New Note</DialogTitle>
                    <DialogDescription>
                        Your thoughts here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input id="title" className="col-span-3" ref={titleRef} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="body" className="text-right">
                            Body
                        </Label>
                        <Input id="body" className="col-span-3" ref={bodyRef} />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                            Category
                        </Label>
                        <Input id="category" className="col-span-3" ref={categoryRef} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSaveNewNote}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
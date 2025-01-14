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
import { useRef } from "react"
import { handleSaveNewNote } from "./handleNotes"
import { Textarea } from "@/components/ui/textarea"

export function AddNote() {
    const titleRef = useRef("")
    const bodyRef = useRef("")
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
                        <Textarea rows="5" placeholder="Your thoughts here." className="col-span-3"  ref={bodyRef} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={() => { handleSaveNewNote(titleRef.current.value, bodyRef.current.value) }}>Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
'use client';

import { Copy, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import ShowNotes from "./showNotes"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ShowTrashedNotes({ notes }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><Trash /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Trashed Notes</DialogTitle>
                    <DialogDescription>
                        All the trashed notes are shown below.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                    <ShowNotes notes={notes} />
                </ScrollArea>
                <DialogFooter className="sm:justify-end">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

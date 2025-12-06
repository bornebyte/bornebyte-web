'use client';

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
import { Star } from "lucide-react";

export function ShowFavNotes({ notes }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline"><Star /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Favourite Notes</DialogTitle>
                    <DialogDescription>
                        Your favourite notes.
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

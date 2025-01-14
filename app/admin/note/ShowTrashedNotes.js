import { Copy } from "lucide-react"

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
import { getTrashedNotes } from "./handleNotes"

export async function ShowTrashedNotes() {
    const notes = await getTrashedNotes();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Trashed</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Trashed Notes</DialogTitle>
                    <DialogDescription>
                        All the trashed notes are shown below.
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <ShowNotes notes={notes} />
                </div>
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

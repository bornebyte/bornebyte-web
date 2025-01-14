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
import { getFavNotes } from "./handleNotes"

export async function ShowFavNotes() {
    const notes = await getFavNotes();
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Favourite</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Favourite Notes</DialogTitle>
                    <DialogDescription>
                        Your favourite notes.
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

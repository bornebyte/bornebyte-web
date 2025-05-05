"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { RotateCcw, Share, Star, Trash, Link } from "lucide-react";
import { handleDeleteNote, handleFav, handleGenShareIDFunc } from "./handleNotes";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { AddNote } from "./addNote";
import MarkDown from "./MarkDown";
import { ToastAction } from "@/components/ui/toast";

const ShowNotes = ({ notes }) => {
    const router = useRouter();
    const handleDelete = async (id, initial) => {
        handleDeleteNote(id, initial);
        if (initial == false) {
            toast({ title: "Note trashed." });
        } else {
            toast({ title: "Note restored." });
        }
        router.refresh();
    }
    const handleFavv = async (id, initial) => {
        handleFav(id, initial);
        if (initial == false) {
            toast({ title: "Note added to favourite." });
        } else {
            toast({ title: "Note removed from favourite." });
        }
        router.refresh();
    }
    const handleGenShareID = async (id) => {
        const res = await handleGenShareIDFunc(id);
        if (res != null) {
            toast({
                title: "Share ID Generated",
                description: res,
                action: (
                    <ToastAction altText="Copy Share ID" onClick={() => navigator.clipboard.writeText(`https://bornebyte.vercel.app/shared/${res}`)}>Copy</ToastAction>
                ),
            });
        } else {
            toast({ title: "Error generating share ID." });
        }
        router.refresh();
    }

    const handleCopyShareID = async (shareid) => {
        navigator.clipboard.writeText(`https://bornebyte.vercel.app/shared/${shareid}`)
        if (shareid != null) {
            toast({
                title: "Share ID Copied to clipboard"
            });
        } else {
            toast({ title: "Error copying share ID." });
        }
        router.refresh();
    }
    return (
        <div>
            {notes && notes.map((note) => {
                return (
                    <Accordion type="single" collapsible key={note.id}>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{note.title}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray-400 text-sm">
                                    {note.created_at}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {note.shareid}
                                </p>
                                <MarkDown note={note} />
                                <div className="flex items-center justify-start gap-4">
                                    <Button variant="destructive" onClick={() => { handleDelete(note.id, note.trash) }}>{note.trash ? <RotateCcw /> : <Trash />}</Button>
                                    <Button className={`${note.fav ? 'bg-yellow-500' : 'bg-transparent text-white hover:text-black'}`} onClick={() => { handleFavv(note.id, note.fav) }}><Star /></Button>
                                    <AddNote icon={"SquarePen"} noteid={note.id} title={note.title} body={note.body} />
                                    <Button className="bg-transparent text-white hover:text-black" onClick={() => { handleGenShareID(note.id) }}><Share /></Button>
                                    <Button className="bg-transparent text-white hover:text-black" onClick={() => { handleCopyShareID(note.shareid) }}><Link /></Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default ShowNotes
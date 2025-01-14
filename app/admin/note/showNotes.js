"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Star, Trash } from "lucide-react";
import { handleDeleteNote, handleFav } from "./handleNotes";

const ShowNotes = ({ notes }) => {
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
                                <p className="py-2">
                                    {note.body}
                                </p>
                                <div className="flex items-center justify-start gap-4">
                                    <Button variant="destructive" onClick={() => { handleDeleteNote(note.id,note.trash) }}><Trash /></Button>
                                    <Button className={`${note.fav ? 'bg-yellow-500' : 'bg-transparent text-white hover:text-black'}`} onClick={() => { handleFav(note.id, note.fav) }}><Star /></Button>
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
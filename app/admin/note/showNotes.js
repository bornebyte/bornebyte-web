"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Button } from "@/components/ui/button";
  import { Trash } from "lucide-react";
  import { handleDeleteNote } from "./handleNotes";

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
                                    {note.date}
                                </p>
                                <p className="py-2">
                                    {note.body}
                                </p>
                                <Button variant="destructive" onClick={() => { handleDeleteNote(note.id) }}><Trash /></Button>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default ShowNotes
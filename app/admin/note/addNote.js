"use client"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { handleSaveNewNote, handleUpdateNote } from "./handleNotes"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { SquarePen } from "lucide-react"

export function AddNote({ icon, noteid, title, body }) {
    const router = useRouter();
    const titleRef = useRef("")
    const bodyRef = useRef("")
    const handleSave = async () => {
        await handleSaveNewNote(titleRef.current.value, bodyRef.current.value)
        // titleRef.current.value = ""
        // bodyRef.current.value = ""
        toast({
            title: "Note saved successfully!"
        })
        router.refresh();
    }
    const handleUpdatee = async () => {
        let resid = await handleUpdateNote(noteid, titleRef.current.value, bodyRef.current.value)
        // titleRef.current.value = ""
        // bodyRef.current.value = ""
        if (resid === true) {
            toast({
                title: "Note updated successfully!"
            })
        } else {
            toast({
                title: "Failed to update note!"
            })
        }
        router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                {
                    icon && icon === "SquarePen" ? <Button className={"bg-transparent text-white hover:text-black"}><SquarePen /></Button> :
                        <Button variant="outline">New Note</Button>
                }
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{icon === "SquarePen" ? "Update" : "New Note"}</DialogTitle>
                    <DialogDescription>
                        {icon === "SquarePen" ? "Update your note." : "Your thoughts here. Click save when you're done."}

                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <Input id="title" defaultValue={title} placeholder="Note title here." className="col-span-3" ref={titleRef} />
                    <Textarea rows="10" defaultValue={body} placeholder="Your thoughts here." className="col-span-3" ref={bodyRef} />
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        {
                            icon && icon === "SquarePen" ? <Button type="submit" onClick={handleUpdatee}>Update</Button> :
                                <Button type="submit" onClick={handleSave}>Save</Button>
                        }
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
"use client"
import { Button } from '@/components/ui/button';
import { handleMarkReadFunc } from './action';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Check } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

const ShowMessages = ({ messages }) => {
    const router = useRouter();
    const handleMarkRead = async (id) => {
        const res = await handleMarkReadFunc(id)
        if (res.success === true) {
            toast({ title: "Marked as read" })
            router.refresh()
        } else {
            toast({ title: "Failed to mark as read" })
            router.refresh()
        }
    }
    return (
        <div className='mx-auto py-6 w-full md:w-2/3'>
            <Accordion type="single" collapsible>
                {messages && messages.map((row) => {
                    return (
                        <AccordionItem value={row.id} key={row.id}>
                            <AccordionTrigger>{row.name} {row.read ? "" : <Badge variant={"secondary"}>Unread</Badge>}</AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <p>ID: {row.id}</p>
                                    <p>Date: {row.time} </p>
                                    <p>Name: {row.name}  </p>
                                    <p>Email: {row.email}  </p>
                                    <p>Message: {row.message}</p>
                                </div>
                                <div className='mt-4'>
                                    <Button onClick={() => handleMarkRead(row.id)}><Check /></Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })
                }
            </Accordion>
        </div>
    )
}

export default ShowMessages
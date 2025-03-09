import { getMessages } from './action';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Messages = async () => {
    const messages = await getMessages();
    return (
        <div className='mx-auto py-6 w-full md:w-2/3'>
            <Accordion type="single" collapsible>
                {messages && messages.map((row) => {
                    return (
                        <AccordionItem value={row.id} key={row.id}>
                            <AccordionTrigger>{row.name}</AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <p>ID: {row.id}</p>
                                    <p>Date: {row.time} </p>
                                    <p>Name: {row.name}  </p>
                                    <p>Email: {row.email}  </p>
                                    <p>Message: {row.message}</p>
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

export default Messages
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const ShowTargetDates = ({ targetdates }) => {
    return (
        <Accordion type="single" collapsible>
            {targetdates && targetdates.map((row) => {
                return (
                    <AccordionItem value={row.id} key={row.id}>
                        <AccordionTrigger>{row.message}</AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <p>ID: {row.id}</p>
                                <p>Target Date: {row.date} </p>
                                <p>Created At: {row.created_at} </p>
                                <p>Message: <span className="text-red-500">{row.message}</span> </p>
                                <p>Months: <span className="text-red-500">{row.months}</span> </p>
                                <p>{row.days} days {row.hours} hours {row.minutes} minutes left.</p>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                )
            })
            }
        </Accordion>
    )
}

export default ShowTargetDates
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

const ShowTargetDates = ({ targetdates }) => {
    return (
        <Accordion type="single" collapsible>
            {targetdates && targetdates.map((row) => {
                return (
                    <AccordionItem value={row.id} key={row.id}>
                        <AccordionTrigger>{row.message}</AccordionTrigger>
                        <AccordionContent>
                            <div>
                                <p>Target Date: {row.date} </p>
                                <p>Created At: {row.created_at} </p>
                                <p><span className="text-red-500"> {row.days} days </span> {row.hours} hours {row.minutes} minutes left.</p>
                                <Progress value={row.progressPercentage} className="w-[60%] my-4" />
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
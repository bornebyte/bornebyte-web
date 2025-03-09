"use client";
import { useActionState } from "react";
import { saveMessage } from "@/app/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast"
const Contact = () => {
    const [state, SaveMessageAction] = useActionState(saveMessage, undefined);
    
    const sendMessageLocalFunc = async (formData) => {
        let res = await saveMessage(formData.get("name"), formData.get("email"), formData.get("message"));
        if (res.success === true) {
            toast({
                title: "Message Sent Successfully",
                description: "Your message has been sent successfully.",
            });
        } else {
            toast({
                title: "Failed to send message.",
                description: "An error occurred while sending message. Please try again later.",
                status: "error",
            });
        }
    }
    return (
        <div className="h-full w-full flex items-center justify-center">
            <form action={sendMessageLocalFunc} className="flex lg:w-2/3 md:w-1/2 w-full mx-4 p-2 flex-col gap-4">
                <p className="text-center font-bold text-3xl mb-4">Send Message</p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 flex-col md:flex-row">
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                        />
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                    <Textarea id="message" rows="6" name="message" placeholder="Type your message here." />
                </div>
                <SubmitButton />
                {state && <p className="text-center text-red-500">{state.message}</p>}
            </form>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button disabled={pending} type="submit">
            {pending ? <Loader2 className="animate-spin" /> : ""} Send
        </Button>
    );
}

export default Contact
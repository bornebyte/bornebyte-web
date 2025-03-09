"use client";

import { useActionState } from "react";
import { saveMessage } from "@/app/action";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const [state, SaveMessageAction] = useActionState(saveMessage, undefined);
    return (
        <div className="h-full w-full flex items-center justify-center">
            <form action={saveMessage} className="flex lg:w-2/3 md:w-1/2 w-full mx-4 border border-gray-800 rounded-2xl p-10 flex-col gap-8">
                <p className="text-center font-bold text-3xl mb-4">Send Message</p>
                <div className="flex flex-col gap-2">
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@doe.com"
                    />
                    <Textarea id="message" name="message" placeholder="Type your message here." />
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
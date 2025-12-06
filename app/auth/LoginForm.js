"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/app/auth/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, Lock } from "lucide-react";

export function LoginForm() {
    const [state, loginAction] = useActionState(login, undefined);

    return (
        <div className="h-full w-full flex items-center justify-center px-4 py-32">
            <form action={loginAction} className="flex lg:w-1/3 md:w-1/2 w-full mx-2 border rounded-xl p-4 flex-col gap-6 shadow-lg bg-card">
                <div className="flex flex-col items-center gap-4 mb-2">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <Lock className="h-8 w-8" />
                    </div>
                    <p className="text-center font-bold text-3xl">
                        Login
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <SubmitButton />
                {state && (
                    <p className="text-center text-red-500 text-sm bg-red-50 dark:bg-red-950/20 p-3 rounded-lg">
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            disabled={pending}
            type="submit"
        >
            {pending ? <Loader2 className="animate-spin mr-2" /> : ""}
            {pending ? "Logging in..." : "Login"}
        </Button>
    );
}
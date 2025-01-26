"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { handleChangePassword } from "./handleDB";
import { toast } from "@/hooks/use-toast";

const SettingsComponent = () => {
  const newPassword = useRef('');
  const handleChangePass = async () => {
    const res = await handleChangePassword(newPassword.current.value);
    newPassword.current.value = '';  // Clear the input field after successful password change.
    if (res == 1) {
      toast({ title: "Passwords changed successfully" })
    } else {
      toast({ title: "Failed to change passwords", description: "An error occurred while trying to change the passwords. Please try again later." })
    }
  }
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div>
        <p className="font-bold text-xl">Change Password</p>
        <div className="flex items-center justify-center gap-4 my-2">
          <Input name="newPassword" type="password" placeholder="New password" ref={newPassword} />
          <Button onClick={handleChangePass}>Change</Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent
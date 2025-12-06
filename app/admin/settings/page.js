"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { handleChangePassword } from "./handleDB";
import { toast } from "@/hooks/use-toast";
import { KeyRound } from "lucide-react";

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
    <div className="h-full w-full flex flex-col items-center justify-center p-4">
      <div className="bg-card border rounded-xl p-8 shadow-lg max-w-md w-full">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <KeyRound className="h-6 w-6" />
          </div>
          <p className="font-bold text-2xl">Change Password</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
            <Input
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              ref={newPassword}
            />
          </div>
          <Button
            onClick={handleChangePass}
          >
            Update Password
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent
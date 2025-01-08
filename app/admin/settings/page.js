"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react";
import { handleChangePassword } from "./handleDB";

const SettingsComponent = () => {
  const newPassword = useRef('');
  return (
    <div className="h-full w-full flex flex-col items-center">
      <div>
        <p className="font-bold text-xl">Change Password</p>
        <div className="flex items-center justify-center gap-4 my-2">
          <Input name="newPassword" type="password" placeholder="New password" ref={newPassword} />
          <Button onClick={() => { handleChangePassword(newPassword.current.value) }}>Change</Button>
        </div>
      </div>
    </div>
  )
}

export default SettingsComponent
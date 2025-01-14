"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Inbox, Link, NotebookPen, Settings } from "lucide-react";
import Home from "../page";

export default function Sidebar() {
    const [showStatusBar, setShowStatusBar] = useState(true)
    const [showActivityBar, setShowActivityBar] = useState(false)
    const [showPanel, setShowPanel] = useState(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem>
                    Home
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <Link href={"/admin"} className='flex items-center justify-center gap-4 '> <Home /> Home</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <Link href={"/admin/inbox"} className='flex items-center justify-center gap-4 '> <Inbox />Inbox</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <Link href={"/admin/note"} className='flex items-center justify-center gap-4 '> <NotebookPen /> Notes</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                    <Link href={"/admin/settings"} className='flex items-center justify-center gap-4 '><Settings />Settings</Link>
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

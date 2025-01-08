// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/components/app-sidebar"

import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
    return (
        <main>
            <Sidebar />
            {children}
        </main>
    )
}
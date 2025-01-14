import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
    return (
        <main>
            <div className="w-full flex justify-end mb-4">
                <Sidebar />
            </div>
            {children}
        </main>
    )
}
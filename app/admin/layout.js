import { getMessages } from "./messages/action";
import Sidebar from "./Sidebar";

export default async function AdminLayout({ children }) {
    const messages = await getMessages()
      const unreadMessagesCount = messages.filter((i) => i.read === false).length
    return (
        <main>
            <div className="w-full flex justify-end mb-4">
                <Sidebar unreadMessagesCount={unreadMessagesCount} />
            </div>
            {children}
        </main>
    )
}
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cookies } from "next/headers"
import { logout } from "@/app/auth/actions";

export default async function Navbar() {
    const cookieStore = await cookies();
    let isLoggedIn = cookieStore.has("session");
    return (
        <header className="h-20 w-full flex items-center justify-between px-6 py-4">
            <Link href="/" className="lg:flex lg:items-center lg:justify-center lg:gap-4">
                <span className="font-bold">Bornebyte</span>
            </Link>
            <nav className="ml-auto lg:flex gap-6">
                <Link
                    href="/admin"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                >
                    Admin
                </Link>
                {
                    isLoggedIn && <Button onClick={logout}>Logout</Button>
                }
            </nav>
        </header>
    )
}

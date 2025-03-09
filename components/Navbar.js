import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cookies } from "next/headers"
import { logout } from "@/app/auth/actions";

export default async function Navbar() {
    const cookieStore = await cookies();
    let isLoggedIn = cookieStore.has("session");
    return (
        <header className="h-20 w-full flex items-center justify-between px-6 py-4">
            <Link href="/" className="lg:flex lg:items-center lg:justify-center lg:gap-4" prefetch={false}>
                <p className="font-bold">Bornebyte</p>
            </Link>
            <nav className="ml-auto flex flex-row gap-6 items-center justify-center">
                <Link
                    href="/admin"
                    prefetch={false}
                    className="hover:text-gray-400"
                >
                    Admin
                </Link>
                {
                    isLoggedIn && <div onClick={logout} className="cursor-pointer hover:text-gray-400">Logout</div>
                }
            </nav>
        </header>
    )
}

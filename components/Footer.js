import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="w-full border-t mt-auto">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <p className="font-bold text-lg">
                            Bornebyte
                        </p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <Link
                            href="/"
                            className="hover:text-foreground transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/admin"
                            className="hover:text-foreground transition-colors duration-200"
                        >
                            Admin
                        </Link>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Bornebyte. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}

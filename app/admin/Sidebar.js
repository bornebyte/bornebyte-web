"use client"
import { Home, Inbox, NotebookPen, Settings, Menu, CircleX, Tally5 } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    return (
        <div className='w-full h-fit flex flex-col items-end mb-6'>
            <button
                onClick={() => setToggleSidebar(!toggleSidebar)}
                className="mx-6 mb-6 p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                aria-label={toggleSidebar ? "Close menu" : "Open menu"}
            >
                {toggleSidebar ?
                    <CircleX className="text-6xl font-bold" />
                    :
                    <Menu className="text-6xl font-bold" />
                }
            </button>
            <div className={`w-full md:w-fit md:px-20 h-fit ${toggleSidebar ? 'flex' : 'hidden'} flex-col gap-4 bg-card border rounded-xl z-20 shadow-lg`}>
                <div className='flex flex-col gap-6 items-center py-10'>
                    <Link
                        href={"/admin"}
                        className='flex items-center justify-center gap-4 hover:bg-accent/50 transition-colors duration-200 px-6 py-2 rounded-lg w-full'
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <Home />
                        <span>Home</span>
                    </Link>
                    <Link
                        href={"/admin/inbox"}
                        className='flex items-center justify-center gap-4 hover:bg-accent/50 transition-colors duration-200 px-6 py-2 rounded-lg w-full'
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <Inbox />
                        <span>Inbox</span>
                    </Link>
                    <Link
                        href={"/admin/note"}
                        className='flex items-center justify-center gap-4 hover:bg-accent/50 transition-colors duration-200 px-6 py-2 rounded-lg w-full'
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <NotebookPen />
                        <span>Notes</span>
                    </Link>
                    <Link
                        href={"/admin/target"}
                        className='flex items-center justify-center gap-4 hover:bg-accent/50 transition-colors duration-200 px-6 py-2 rounded-lg w-full'
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <Tally5 />
                        <span>Target</span>
                    </Link>
                    <Link
                        href={"/admin/settings"}
                        className='flex items-center justify-center gap-4 hover:bg-accent/50 transition-colors duration-200 px-6 py-2 rounded-lg w-full'
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                    >
                        <Settings />
                        <span>Settings</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
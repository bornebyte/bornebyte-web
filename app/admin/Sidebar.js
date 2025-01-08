"use client"
import { Home, Inbox, NotebookPen, Search, Settings, Menu, CircleX } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react'

const Sidebar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    return (
        <div className='w-full h-fit flex flex-col items-end mb-6'>
            {
                toggleSidebar ?
                    <CircleX onClick={() => { setToggleSidebar(!toggleSidebar) }} className="text-6xl font-bold mx-6 mb-6" />
                    :
                    <Menu onClick={() => setToggleSidebar(!toggleSidebar)} className="text-6xl font-bold mx-6 mb-6" />
            }
            <div className={`w-full md:w-fit md:px-20 h-fit ${toggleSidebar ? 'flex' : 'hidden'} flex-col gap-4 border border-gray-800 rounded-xl z-20`}>
                <div className='flex flex-col gap-8 items-center py-10'>
                    <Link href={"/admin"} className='flex items-center justify-center gap-4 ' onClick={() => { setToggleSidebar(!toggleSidebar) }} > <Home /> Home</Link>
                    <Link href={"/admin/inbox"} className='flex items-center justify-center gap-4 ' onClick={() => { setToggleSidebar(!toggleSidebar) }} > <Inbox />Inbox</Link>
                    <Link href={"/admin/note"} className='flex items-center justify-center gap-4 ' onClick={() => { setToggleSidebar(!toggleSidebar) }} > <NotebookPen /> Notes</Link>
                    <Link href={"/admin"} className='flex items-center justify-center gap-4 ' onClick={() => { setToggleSidebar(!toggleSidebar) }} ><Search />Search</Link>
                    <Link href={"/admin/settings"} className='flex items-center justify-center gap-4 ' onClick={() => { setToggleSidebar(!toggleSidebar) }} ><Settings />Settings</Link>
                </div>
            </div>
        </div >
    )
}

export default Sidebar
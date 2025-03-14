import { getSharedNotes } from '@/app/admin/note/handleNotes';
import MarkDown from '@/app/admin/note/MarkDown';
import React from 'react'

const Shared = async ({ params }) => {
    const { id } = await params
    const note = await getSharedNotes(id);
    if(!note){
        return <div className='text-4xl font-bold flex justify-center items-center w-full h-[70vh]'>Note not found!</div>
    }
    return (
        <div>
            <h2 className='text-4xl font-bold'>{note.title}</h2>
            <p>{note.created_at}</p>
            <MarkDown note={note} />
        </div>
    )
}

export default Shared
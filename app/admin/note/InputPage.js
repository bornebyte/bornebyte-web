"use client"
import { Input } from "@/components/ui/input"
import { useRef, useState, useEffect } from "react";
import { getSearchNotes } from "./handleNotes";
import ShowNotes from "./showNotes";

const SearchComponent = ({ notes }) => {
    const [searchResults, setSearchResults] = useState(notes);
    const inputRef = useRef(null);

    useEffect(() => {
        setSearchResults(notes);
    }, [notes]);

    const searchNotes = async () => {
        const query = inputRef.current.value;
        if (!query) {
            setSearchResults(notes);
            return;
        }
        const res = await getSearchNotes(query);
        setSearchResults(res);
    }
    return (
        <div>
            <div className="w-full flex items-center justify-center gap-2 my-4">
                <Input type="text" onChange={searchNotes} ref={inputRef} placeholder="Search" className="lg:w-[40%] md:w-[60%] w-full" />
            </div>
            <div className="mx-auto py-6 w-full md:w-2/3">
                <ShowNotes notes={searchResults} noteid={null} />
            </div>
        </div>
    )
}

export default SearchComponent

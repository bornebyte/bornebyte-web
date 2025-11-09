import { AddNote } from "./addNote";
import { getNotes } from "./handleNotes";
import { ShowTrashedNotes } from "./ShowTrashedNotes";
import { ShowFavNotes } from "./ShowFav";
import SearchComponent from "./InputPage";
import Download from "./Download";

const Note = async () => {
  const notes = await getNotes();
  return (
    <div>
      <div className="w-full flex items-center justify-end gap-2">
        <ShowFavNotes />
        <ShowTrashedNotes />
        <AddNote icon={""} />
        <Download notes={notes} />
      </div>
      <SearchComponent notes={notes} />
    </div>
  )
}

export default Note

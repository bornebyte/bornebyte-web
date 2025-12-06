import { AddNote } from "./addNote";
import { getNotes } from "./handleNotes";
import { ShowTrashedNotes } from "./ShowTrashedNotes";
import { ShowFavNotes } from "./ShowFav";
import SearchComponent from "./InputPage";
import Download from "./Download";

const Note = async () => {
  const notes = await getNotes();
  return (
    <div className="space-y-6 p-4">
      <div className="w-full flex items-center justify-end gap-3">
        <ShowFavNotes />
        <ShowTrashedNotes />
        <AddNote icon={""} />
        <Download notes={notes} />
      </div>
      <div>
        <SearchComponent notes={notes} />
      </div>
    </div>
  )
}

export default Note

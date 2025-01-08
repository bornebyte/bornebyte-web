import { AddNote } from "./addNote";
import ShowNotes from "./showNotes";
import { getNotes } from "./handleNotes";

const Note = async () => {
  const notes = await getNotes();
  return (
    <div>
      <div className="w-full flex justify-end">
        <AddNote />
      </div>
      <div className="mx-auto py-6 w-full md:w-2/3">
        <ShowNotes notes={notes} />
      </div>
    </div>
  )
}

export default Note

import { getNotes, getFavNotes, getTrashedNotes } from "./handleNotes";
import NotesClient from "./NotesClient";

const Note = async () => {
  const [notes, favNotes, trashedNotes] = await Promise.all([
    getNotes(),
    getFavNotes(),
    getTrashedNotes()
  ]);
  return <NotesClient initialNotes={notes} initialFavNotes={favNotes} initialTrashedNotes={trashedNotes} />
}

export default Note

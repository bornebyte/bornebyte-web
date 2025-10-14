import { AddNote } from "./addNote";
import { getNotes } from "./handleNotes";
import { ShowTrashedNotes } from "./ShowTrashedNotes";
import { ShowFavNotes } from "./ShowFav";
import SearchComponent from "./InputPage";

const Note = async () => {
  const notes = await getNotes();
  return (
    <div>
      <div className="w-full flex items-center justify-end gap-2">
        <ShowFavNotes />
        <ShowTrashedNotes />
        <AddNote icon={""} />
      </div>
      {/* <div className="w-full flex items-center justify-center gap-2 mt-4"> */}
        <SearchComponent notes={notes} />
      {/* </div> */}
      {/* <div className="mx-auto py-6 w-full md:w-2/3">
        <ShowNotes notes={notes} noteid={null} />
      </div> */}
    </div>
  )
}

export default Note

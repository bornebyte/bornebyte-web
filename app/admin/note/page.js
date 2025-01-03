import { sql } from "@vercel/postgres";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AddNote } from "./addNote";

const NoteComponent = async () => {
  const { rows } = await sql`SELECT * from notes`;
  return (
    <div>
      <AddNote />
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={rows} />
      </div>
    </div>
  )
}

export default NoteComponent

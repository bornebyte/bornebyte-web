import { sql } from "@vercel/postgres";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { AddNote } from "./addNote";

const NoteComponent = async () => {
  const { rows } = await sql`SELECT * from notes`;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const updatedRows = rows.map((row) => ({
    ...row,
    date: formatDate(row.date)
  }));

  return (
    <div>
      <AddNote />
      <div className="mx-auto py-10">
        <DataTable columns={columns} data={updatedRows} />
      </div>
    </div>
  )
}

export default NoteComponent

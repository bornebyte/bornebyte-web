import { ChartComponent } from "./Chart";
import { handleNotesChartData, getTotalNotesCount } from "./note/handleNotes";

// --- Card Component Definition (from step 1) ---
const Card = ({ title, value }) => {
  return (
    <div className="h-32 w-52 rounded-lg p-5 flex flex-col justify-between shadow-md
                   bg-card border hover:shadow-lg transition-shadow duration-200">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="text-4xl font-bold self-end">
        {value !== undefined ? value : '...'}
      </p>
    </div>
  );
};
// --- End Card Component Definition ---


const AdminMainPageComponent = async () => {
  // Fetch chart data and total notes count (potentially in parallel)
  const [chartDataRes, totalNotes] = await Promise.all([
    handleNotesChartData(),
    getTotalNotesCount() // *** You need to implement/import this function ***
  ]);

  return (
    // Add some layout structure (e.g., padding, flex container)
    <div className="p-4 md:p-6 space-y-6">
      {/* Container for cards if you plan to add more */}
      <div className="flex flex-wrap gap-6">
        <Card title="Total Notes" value={totalNotes} />
        {/* You could add more cards here */}
        {/* <Card title="Users Online" value={onlineUsers} /> */}
      </div>

      {/* Chart Component */}
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Notes Activity
        </h2>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <ChartComponent chartData={chartDataRes} />
        </div>
      </div>
    </div>
  );
};

export default AdminMainPageComponent;

// *** Placeholder for the required function (should be in ./note/handleNotes.js or similar) ***
// Example: /home/shubham/dev/bornebyte/app/admin/note/handleNotes.js
/*
export const getTotalNotesCount = async () => {
  // Replace with your actual database query or API call
  // const count = await db.note.count();
  // return count;
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
  return 123; // Example count
}
*/

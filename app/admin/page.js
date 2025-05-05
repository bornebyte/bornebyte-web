import { ChartComponent } from "./Chart";
// Assuming you have a function to get the total count, maybe in the same file as handleNotesChartData
import { handleNotesChartData, getTotalNotesCount } from "./note/handleNotes";

// --- Card Component Definition (from step 1) ---
const Card = ({ title, value }) => {
  return (
    <div className="h-28 w-48 rounded-lg p-4 flex flex-col justify-between shadow-lg
                   bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600
                   text-white">
      <p className="text-sm font-medium opacity-90">{title}</p>
      <p className="text-3xl font-bold self-end">{value !== undefined ? value : '...'}</p>
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
      <div className="flex flex-wrap gap-4">
         <Card title="Total Notes" value={totalNotes} />
         {/* You could add more cards here */}
         {/* <Card title="Users Online" value={onlineUsers} /> */}
      </div>

      {/* Chart Component */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Notes Activity</h2>
        <ChartComponent chartData={chartDataRes} />
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

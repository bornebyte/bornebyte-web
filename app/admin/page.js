import { ChartComponent } from "./Chart"
import { handleNotesChartData } from "./note/handleNotes"

const AdminMainPageComponent = async () => {
  const res = await handleNotesChartData()
  return (
    <div>
      <ChartComponent chartData={res} />
    </div>

  )
}

export default AdminMainPageComponent
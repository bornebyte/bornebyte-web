import { getTargetDays } from './action'
import SetNewLeftDays from './setNew'
import ShowTargetDates from './ShowTargetDates'

const Left = async () => {
    const targetdates = await getTargetDays();
    return (
        <div className='space-y-4'>
            <div className='w-full flex items-center justify-end'>
                <SetNewLeftDays />
            </div>
            <ShowTargetDates targetdates={targetdates} />
            {/* <div className='w-full py-4 border-gray-500 rounded-xl'>
                {targetdates && targetdates.map(row => {
                    return (
                        <div key={row.id} className='w-full hover:bg-gray-900 rounded-xl transition-all'>
                            <div className='w-full px-4 py-2 text-2xl'>
                                <div className='text-base text-gray-500'>
                                    ID: <span className="text-blue-500">{row.id}</span> Target Date: <span className="text-blue-500">{row.date}</span> Created At: <span className="text-blue-500">{row.created_at}</span>
                                </div>
                                <div>
                                    <span className='text-red-500'>{row.message || "No message"} | </span> ({row.months} months) {row.days} days {row.hours} hours {row.minutes} minutes left.
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default Left
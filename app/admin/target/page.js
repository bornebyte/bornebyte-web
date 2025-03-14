import { getTargetDays } from './action'
import SetNewLeftDays from './setNew'
import ShowTargetDates from './ShowTargetDates'

const TargetDates = async () => {
    const targetdates = await getTargetDays();
    return (
        <div className='space-y-4'>
            <div className='w-full flex items-center justify-end'>
                <SetNewLeftDays />
            </div>
            <div className='mx-auto py-6 w-full md:w-2/3'>
                <ShowTargetDates targetdates={targetdates} />
            </div>
        </div>
    )
}

export default TargetDates
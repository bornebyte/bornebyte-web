import { getTargetDays } from './action'
import TargetClient from './TargetClient'

const TargetDates = async () => {
    const targetdates = await getTargetDays();
    return <TargetClient initialTargets={targetdates} />;
}

export default TargetDates
import { getNotifications } from "./action";
import ShowInbox from "./ShowInbox";

const Inbox = async () => {
  const result = await getNotifications();
  return (
    <div>
      <ShowInbox result={result[0]} filter={result[1]} />
    </div>
  )
}

export default Inbox
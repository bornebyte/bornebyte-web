import { getNotifications } from "./action";
import InboxClient from "./InboxClient";

const Inbox = async () => {
  const result = await getNotifications("*");
  return <InboxClient initialResult={result[0]} initialFilter={result[1]} />;
}

export default Inbox
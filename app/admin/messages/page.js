import { getMessages } from './action';
import ShowMessages from './ShowMessages';

const Messages = async () => {
    const messages = await getMessages();
    return (
        <ShowMessages messages={messages} />
    )
}

export default Messages
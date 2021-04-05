import React from 'react'
import { ChatItemMe, ChatItemOther } from '../atoms'

const ChatItem = ({isMe, text, date, photo}) => {
    if (isMe) {
        return <ChatItemMe text={text} date={date} />
    }
    return <ChatItemOther text={text} date={date} photo={photo} />
}

export default ChatItem

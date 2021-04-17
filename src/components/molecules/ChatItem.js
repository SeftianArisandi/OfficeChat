import React from 'react'
import { ChatItemMe, ChatItemOther } from '../atoms'

const ChatItem = ({isMe, text, text2, date, photo}) => {
    if (isMe) {
        return <ChatItemMe text={text} text2={text2} date={date} />
    }
    return <ChatItemOther text={text} text2={text2} date={date} photo={photo} />
}

export default ChatItem

import React from 'react'
import { ChatItemMe, ChatItemOther } from '../atoms'

const ChatItem = ({isMe}) => {
    if (isMe) {
        return <ChatItemMe />
    }
    return <ChatItemOther />
}

export default ChatItem


import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center">
        <img className="h-8"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
        <span className="text font-bold m-2 px-4">{name}  :</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
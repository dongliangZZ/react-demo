import React, { useLayoutEffect, useState } from "react";
import './chat.css'

//import chat
import chatStore from './chat'

const FirstPerson = () => {
  //===>1.subscribing to our chat and retrieving existing gdata
  const [chatState, setChatState] = useState(chatStore.initialState)

  useLayoutEffect (() => {
    const subs = chatStore.subscribe(setChatState);
    chatStore.init();

    return () => subs.unsubscribe();
  },[])

  //<=== 1

  const onSubmit = e => {
    e.preventDefault();
    const messageObject = {
      person: 'first-person',
      text: e.target.elements.messageInput.value.trim(),
    }
    chatStore.sendMessage(messageObject)
    document.getElementById('messageForm').reset()
  }

  return (
    <div className="container">
      <h2>Mycroft</h2>
      <div className="chat-box">
        {chatState.data.map(message => (
          <div>
            <p className={message.person}>{message.text}</p>
            <div className="clear"></div>
          </div>
        ))}
      </div>
      <form id="messageForm" onSubmit={onSubmit}>
        <input
          type="text"
          id="messageInput"
          name="messageInput"
          placeholder="type here..."
          required
        />
        <button type="submit">Send</button> <br />
      </form>
      <button className="clear-button" onClick={() => chatStore.clearChat()}>
        Clear Chat
      </button>
    </div>
  )
}

export default FirstPerson;
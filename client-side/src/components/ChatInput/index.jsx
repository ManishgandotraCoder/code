import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import './index.css'
export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <div className="main">
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Enter your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button className="button2" type="submit">
          <IoMdSend className="iconbutton"/>
        </button>
      </form>
    </div>

  );
}



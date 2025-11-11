import React from "react";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";
import ChatInput from "./ChatInput";

function ChatContainer() {
  return (
    <div className="flex flex-col w-full max-w-md h-[600px] bg-white shadow-lg rounded-lg overflow-hidden">
      <ChatHeader />
      <ChatRoom />
      <ChatInput />
    </div>
  );
}

export default ChatContainer;

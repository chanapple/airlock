// components/chat/ChatContainer.jsx
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatRoom from "./ChatRoom";
import ChatInput from "./ChatInput";

function ChatContainer() {
  return (
    // 전체 화면을 차지(모바일), 데스크탑에서는 가운데 정렬만
    <div className="w-full min-h-[100svh] bg-white md:max-w-screen-md md:mx-auto">
      {/* 세로 레이아웃: 헤더 / 스크롤영역 / 인풋 */}
      <div className="flex flex-col min-h-[100svh] pt-[env(safe-area-inset-top)]">
        {/* 맨 위 헤더 */}
        <header className="border-b bg-white">
          <ChatHeader />
        </header>

        {/* 가운데만 스크롤 (ChatRoom 내부가 flex-1 overflow-y-auto 이미 갖고 있음) */}
        <ChatRoom />

        {/* 맨 아래 인풋 */}
        <footer className="border-t bg-white pb-[env(safe-area-inset-bottom)]">
          <ChatInput />
        </footer>
      </div>
    </div>
  );
}

export default ChatContainer;

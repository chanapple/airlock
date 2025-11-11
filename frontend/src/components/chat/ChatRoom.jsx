import React, { useRef, useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

export default function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef(null);

  // 임시 메시지 추가 (WebRTC 연결 전용 코드 연결 시 이 부분 교체)
  const handleSend = (text) => {
    if (!text.trim()) return;
    const newMsg = {
      id: Date.now(),
      text,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);

    // 1초 후 상대방 메시지 시뮬레이션
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "상대방의 답장입니다 😊",
          sender: "other",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1000);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col w-full max-w-md h-[90vh] bg-[#f8f9fa] rounded-3xl shadow-xl overflow-hidden border border-gray-200">
      {/* 상단 헤더 */}
      <ChatHeader />

      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] px-4 py-2 rounded-2xl shadow-sm text-sm ${
                msg.sender === "me"
                  ? "bg-[#DCF8C6] text-gray-800 rounded-br-none" // 내 메시지 (연한 초록)
                  : "bg-white text-gray-800 rounded-bl-none border border-gray-200" // 상대 메시지 (하얀색)
              }`}
            >
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <p className="text-[10px] text-right text-gray-500 mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
        <div ref={scrollRef}></div>
      </div>

      {/* 하단 입력창 */}
      <div className="border-t border-gray-200 bg-white">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}

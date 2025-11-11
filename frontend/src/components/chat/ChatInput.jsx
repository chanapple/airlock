import React, { useState } from "react";

export default function ChatInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="flex items-center p-3">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        placeholder="메시지를 입력하세요"
        className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
      />
      <button
        onClick={send}
        className="ml-3 bg-[#FAE100] text-gray-900 px-4 py-2 rounded-full font-semibold hover:opacity-80"
      >
        전송
      </button>
    </div>
  );
}

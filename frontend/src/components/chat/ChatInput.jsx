import React from "react";

function ChatInput() {
  return (
    <div className="border-t flex items-center p-3 bg-white">
      <input
        type="text"
        placeholder="메시지를 입력하세요"
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-[#DDE2B2]"
      />
      <button className="ml-2 bg-[#DDE2B2] hover:bg-[#cdd59b] px-4 py-2 rounded-full font-semibold">
        전송
      </button>
    </div>
  );
}

export default ChatInput;

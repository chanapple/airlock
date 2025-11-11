import React from "react";

export default function ChatHeader() {
  return (
    <div className="bg-[#FAE100] text-gray-900 font-semibold py-4 px-5 flex items-center shadow-md">
      <button className="mr-3 text-gray-800 hover:opacity-70">←</button>
      <span>채팅방</span>
    </div>
  );
}

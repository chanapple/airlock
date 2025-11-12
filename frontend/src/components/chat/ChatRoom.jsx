// ChatRoom: 채팅 메시지 목록을 표시하는 React 함수형 컴포넌트
// 역할: 채팅방의 본문 영역(메시지 목록)을 렌더링
// props 없음 (현재는 테스트용 더미 데이터 사용)

import React from "react";

function ChatRoom() {
  // 더미 메시지 배열 (sender: me / other 로 구분)
  const messages = [
    { id: 1, text: "드디어", sender: "other" },
    { id: 2, text: "성공", sender: "me" },
    { id: 3, text: "야호", sender: "other" },
  ];

  return (
    // 채팅 메시지 영역
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
      {/* 메시지 목록 렌더링 */}
      {messages.map((msg) => (
        <div
          key={msg.id} // 각 메시지 구분용 고유 ID
          className={`flex ${
            msg.sender === "me" ? "justify-end" : "justify-start"
          }`} // 내가 보낸 메시지는 오른쪽, 상대는 왼쪽 정렬
        >
          {/* 메시지 박스 */}
          <div
            className={`px-3 py-2 rounded-lg max-w-[75%] text-gray-900 ${
              msg.sender === "me"
                ? "bg-[#F2F0E5] text-right" // 내가 보낸 메시지 스타일
                : "bg-[#DDE2B2] text-left" // 상대 메시지 스타일
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatRoom;

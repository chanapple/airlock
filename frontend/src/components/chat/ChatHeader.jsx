// ChatHeader: 채팅창 상단의 헤더 영역을 렌더링하는 React 함수형 컴포넌트
// 역할: 채팅방 이름 또는 서비스 타이틀을 표시
// props 없음 (현재는 고정된 제목 "AirLock Chat"만 표시)

import React from "react";

function ChatHeader() {
  return (
    // 헤더 영역 스타일
    <div className="bg-[#F2F0E5] text-gray-800 font-semibold text-center py-3 border-b">
      AirLock Chat
    </div>
  );
}

export default ChatHeader;
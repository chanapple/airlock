// ChatInput: 채팅창 하단의 메시지 입력 영역을 렌더링하는 React 함수형 컴포넌트
// 역할: 사용자 입력을 받아 메시지를 전송하는 UI 구성
// props 없음 (현재는 단순히 UI만 담당)

import React from "react";

function ChatInput() {
  return (
    // 입력창 전체 컨테이너
    // border-t → 위쪽 테두리
    // flex → 가로 배치
    // items-center → 세로 가운데 정렬
    // p-3 → 여백
    // bg-white → 배경 흰색
    <div className="border-t flex items-center p-3 bg-white">
      {/* 텍스트 입력 필드 */}
      <input
        type="text"
        placeholder="메시지를 입력하세요" // 입력 안내 문구
        className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring focus:ring-[#DDE2B2]"
      />

      {/* 전송 버튼 */}
      <button className="ml-2 bg-[#DDE2B2] hover:bg-[#cdd59b] px-4 py-2 rounded-full font-semibold">
        전송
      </button>
    </div>
  );
}

export default ChatInput;

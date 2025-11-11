import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatRoom from "./components/chat/ChatRoom";
import ChatContainer from "./components/chat/ChatContainer";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.error("백엔드 연결 실패:", error));
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Spring 연결 테스트 */}
      <div className="mb-4 text-gray-700 font-semibold">
        백엔드에서 가져온 데이터: {hello || "로딩 중..."}
      </div>

      {/* WebRTC 채팅 UI */}
      <div className="w-full flex-1 flex items-center justify-center">
         <ChatContainer />
      </div>
    </div>
  );
}

export default App;

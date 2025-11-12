import React, { useEffect, useState } from "react";
import axios from "axios";
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
    <div className="min-h-[100svh] bg-gray-100">
      <ChatContainer serverHello={hello} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import LoginModal from "./components/LoginModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        로그인하기
      </button>

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import LoginModal from "./components/modal/LoginModal";
import RegisterModal from "./components/modal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState(null); // "login" | "register" | null

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* 처음에 로그인 버튼 */}
      <button
        onClick={() => setActiveModal("login")}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition"
      >
        로그인하기
      </button>

      {/* 로그인 모달 */}
      {activeModal === "login" && (
        <LoginModal
          onClose={() => setActiveModal(null)}
          onSwitchToRegister={() => setActiveModal("register")}
        />
      )}

      {/* 회원가입 모달 */}
      {activeModal === "register" && (
        <RegisterModal
          onClose={() => setActiveModal(null)}
          onSwitchToLogin={() => setActiveModal("login")}
        />
      )}
    </div>
  );
}

export default App;

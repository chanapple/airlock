import React, { useEffect } from "react";

export default function LoginModal({ onClose }) {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // 배경 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose} // 배경 클릭 시 닫힘
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-96 p-6 relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()} // 내부 클릭은 닫히지 않게
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">로그인</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const pw = e.target.password.value;
            alert(`이메일: ${email}\n비밀번호: ${pw}`);
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

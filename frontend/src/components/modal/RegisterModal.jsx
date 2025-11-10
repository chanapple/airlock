// 회원가입 폼

import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (password !== confirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    setError("");
    alert(`회원가입 성공!\n이름: ${name}\n이메일: ${email}`);
    onClose();
  };

  return (
    <ModalWrapper title="회원가입" onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="이름 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="이메일 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />
        <input
          type="password"
          name="confirm"
          placeholder="비밀번호 확인"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />

        {/* 오류 메시지 */}
        {error && (
          <p className="text-red-500 text-sm font-medium text-center -mt-2">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          회원가입
        </button>
      </form>

      <div className="text-center mt-4 text-sm">
        이미 계정이 있으신가요?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-green-600 hover:underline"
        >
          로그인
        </button>
      </div>
    </ModalWrapper>
  );
}

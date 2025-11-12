// RegisterModal: 회원가입 모달창을 렌더링하는 React 함수형 컴포넌트
// props로 onClose(닫기 함수), onSwitchToLogin(로그인 창으로 전환 함수)를 받음

import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";

export default function RegisterModal({ onClose, onSwitchToLogin }) {
  // useState 훅을 사용해 에러 메시지 상태 관리
  const [error, setError] = useState("");

  // 폼 제출 시 실행되는 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 새로고침 방지

    // 입력값 가져오기
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    // 비밀번호 불일치 검사
    if (password !== confirm) {
      setError("비밀번호가 일치하지 않습니다."); // 에러 메시지 출력
      return;
    }

    // 통과 시 에러 초기화
    setError("");
    alert(`회원가입 성공!\n이름: ${name}\n이메일: ${email}`); // 임시 알림 (백엔드 연결 전 테스트용)
    onClose(); // 모달 닫기
  };

  return (
    // ModalWrapper: 모달 레이아웃(제목, 닫기 버튼 등)을 감싸는 공용 컴포넌트
    <ModalWrapper title="회원가입" onClose={onClose}>
      {/* 회원가입 입력 폼 */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* 이름 입력 */}
        <input
          type="text"
          name="name"
          placeholder="이름 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />

        {/* 이메일 입력 */}
        <input
          type="email"
          name="email"
          placeholder="이메일 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />

        {/* 비밀번호 입력 */}
        <input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />

        {/* 비밀번호 확인 입력 */}
        <input
          type="password"
          name="confirm"
          placeholder="비밀번호 확인"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400"
          required
        />

        {/* 오류 메시지 출력 영역 */}
        {error && (
          <p className="text-red-500 text-sm font-medium text-center -mt-2">
            {error}
          </p>
        )}

        {/* 회원가입 버튼 */}
        <button
          type="submit"
          className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          회원가입
        </button>
      </form>

      {/* 로그인으로 전환 링크 */}
      <div className="text-center mt-4 text-sm">
        이미 계정이 있으신가요?{" "}
        <button
          onClick={onSwitchToLogin} // 로그인 모달로 전환
          className="text-green-600 hover:underline"
        >
          로그인
        </button>
      </div>
    </ModalWrapper>
  );
}

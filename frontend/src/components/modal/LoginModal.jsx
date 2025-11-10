//로그인 폼

import ModalWrapper from "./ModalWrapper";

export default function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    <ModalWrapper title="로그인" onClose={onClose}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          alert(`로그인 시도: ${email} / ${password}`);
        }}
        className="flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          placeholder="이메일 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          로그인
        </button>
      </form>

      <div className="text-center mt-4 text-sm">
        계정이 없으신가요?{" "}
        <button
          onClick={onSwitchToRegister}
          className="text-blue-600 hover:underline"
        >
          회원가입
        </button>
      </div>
    </ModalWrapper>
  );
}

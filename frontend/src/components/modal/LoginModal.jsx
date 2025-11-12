// props로 onClose(닫기 함수), onSwitchToRegister(회원가입으로 전환 함수)를 받음
export default function LoginModal({ onClose, onSwitchToRegister }) {
  return (
    // ModalWrapper: 모달의 공통 레이아웃(배경, 닫기 버튼 등)을 감싸는 컴포넌트
    // title="로그인" → 모달 상단 제목
    // onClose → 닫기 버튼 클릭 시 실행될 함수
    <ModalWrapper title="로그인" onClose={onClose}>
      
      {/* 로그인 폼 시작 */}
      <form
        // onSubmit: 로그인 버튼 클릭 시 실행되는 이벤트 핸들러
        onSubmit={(e) => {
          e.preventDefault(); // 폼이 새로고침되는 기본 동작 방지
          const email = e.target.email.value; // name="email" input의 값 가져오기
          const password = e.target.password.value; // name="password" input의 값 가져오기
          alert(`로그인 시도: ${email} / ${password}`); // 현재는 임시로 alert로 표시 (추후 axios 등으로 백엔드 연결)
        }}
        // 입력 필드 간의 간격 조절
        className="flex flex-col gap-4"
      >

        {/* 이메일 입력 필드 */}
        <input
          type="email"
          name="email"
          placeholder="이메일 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          required // 필수 입력값
        />

        {/* 비밀번호 입력 필드 */}
        <input
          type="password"
          name="password"
          placeholder="비밀번호 입력"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400"
          required // 필수 입력값
        />

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          로그인
        </button>
      </form>

      {/* 회원가입 링크 영역 */}
      <div className="text-center mt-4 text-sm">
        계정이 없으신가요?{" "}
        <button
          onClick={onSwitchToRegister} // 회원가입 모달로 전환하는 함수
          className="text-blue-600 hover:underline"
        >
          회원가입
        </button>
      </div>
    </ModalWrapper>
  );
}
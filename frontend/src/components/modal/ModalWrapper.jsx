// ModalWrapper: LoginModal과 RegisterModal에서 공통으로 사용하는 모달 배경/레이아웃 컴포넌트
// props:
//   - title: 모달 상단에 표시할 제목 (예: "로그인", "회원가입")
//   - children: 모달 내부에 렌더링할 컴포넌트(LoginModal, RegisterModal 등)
//   - onClose: 배경 클릭 또는 닫기 버튼 클릭 시 실행되는 함수

export default function ModalWrapper({ title, children, onClose }) {
  return (
    // 배경: 화면 전체 덮는 반투명 검은색 오버레이
    // fixed + inset-0 → 전체 화면 고정
    // flex + items-center + justify-center → 중앙 정렬
    // bg-black/50 → 반투명 배경
    // z-50 → 최상단 레이어
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      {/* 모달 본체 */}
      <div
        className="bg-white rounded-2xl shadow-xl w-96 p-6 relative"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록 이벤트 전파 차단
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* 제목 영역 */}
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

        {/* 자식 컴포넌트(LoginModal 또는 RegisterModal 내용) */}
        {children}
      </div>
    </div>
  );
}

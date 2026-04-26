export default function useResultClosing() {
  const messages = [
    "당신은 이미 답을 향해 움직이고 있습니다.",
    "오늘의 선택은 내일의 방향이 됩니다.",
    "지금의 고민도 곧 길이 됩니다.",
    "서두르지 않아도 흐름은 이어집니다.",
    "지금 이 순간이 새로운 시작일 수 있습니다.",
  ];

  const message = messages[Math.floor(Math.random() * messages.length)];

  const handleClose = () => {
    window.location.href = "/mypage";
  };

  return { message, handleClose };
}

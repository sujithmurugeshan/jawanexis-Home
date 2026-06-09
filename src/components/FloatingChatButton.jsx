import { MessageCircle } from "lucide-react";

function FloatingChatButton() {
  return (
    <button
      className="fixed bottom-6 right-7 z-50 flex h-[68px] w-[68px] items-center justify-center rounded-full bg-[#6d16f2] text-white shadow-card"
      type="button"
      aria-label="Chat support"
    >
      <MessageCircle size={30} aria-hidden="true" />
    </button>
  );
}

export default FloatingChatButton;

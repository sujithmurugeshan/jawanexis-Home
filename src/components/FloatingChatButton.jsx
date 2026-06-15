import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    text: "Hi, I am Jawa, your AI course guide. Ask me about courses, live classes, placement guidance, or contact details."
  }
];

const quickPrompts = ["Which course suits me?", "Tell me about placement guidance", "Contact support"];

function getJawaReply(message) {
  const text = message.toLowerCase();

  if (text.includes("contact") || text.includes("phone") || text.includes("email") || text.includes("support")) {
    return "You can contact Jawa EDTECh at +91 9790631286 or email hr@Jawa EDTECh.com. You can also ask me about courses before contacting the team.";
  }

  if (text.includes("placement") || text.includes("job") || text.includes("career")) {
    return "Jawa EDTECh programs include placement guidance after course completion. Jawa can help you choose a course based on your target role, current skill level, and language preference.";
  }

  if (text.includes("live") || text.includes("class") || text.includes("mentor")) {
    return "Live classes are available for HR Executive Training, HR Recruitment Training, Full Stack Development, QA Testing, and DSA. Classes are designed with mentor guidance and practical learning.";
  }

  if (text.includes("hr") || text.includes("recruit")) {
    return "For HR careers, Jawa recommends HR Executive Training if you want broad HR operations skills, and HR Recruitment Training if you want to focus on hiring, screening, and recruitment workflows.";
  }

  if (text.includes("full stack") || text.includes("developer") || text.includes("coding")) {
    return "Full Stack Development is a good choice if you want to build websites and applications with front-end and back-end skills. It is best for learners who enjoy coding and project work.";
  }

  if (text.includes("qa") || text.includes("testing") || text.includes("software quality")) {
    return "Software Quality Testing is a strong path if you like finding issues, checking product quality, and working with structured test cases. It can be a good entry point into tech roles.";
  }

  if (text.includes("dsa") || text.includes("data structure") || text.includes("algorithm")) {
    return "DSA helps improve problem solving and interview preparation. Jawa recommends it if you are preparing for developer interviews or want stronger coding fundamentals.";
  }

  if (text.includes("fee") || text.includes("price") || text.includes("offer") || text.includes("discount")) {
    return "The homepage currently highlights a Rs. 5,000 offer on Jawa EDTECh Live Class programs. For exact pricing, contact the admissions team so they can confirm the latest details.";
  }

  if (text.includes("course") || text.includes("program") || text.includes("suit")) {
    return "Jawa can help you pick from HR Executive Training, HR Recruitment Training, Full Stack Development, QA Testing, and DSA. Tell me your background and target role, and I will suggest a path.";
  }

  return "I can help with Jawa EDTECh courses, live classes, placement guidance, fees, and contact details. Tell me what you want to learn or the role you are aiming for.";
}

function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text = input) => {
    const cleanText = text.trim();

    if (!cleanText || isTyping) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: cleanText
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: getJawaReply(cleanText)
        }
      ]);
      setIsTyping(false);
    }, 520);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  };

  return (
    <div
      className="pointer-events-none fixed bottom-[22px] right-[18px] flex items-end justify-end sm:right-[28px]"
      style={{ zIndex: 9999 }}
    >
      {isOpen ? (
        <section className="pointer-events-auto absolute bottom-[84px] right-0 flex h-[560px] max-h-[calc(100vh-112px)] w-[calc(100vw-32px)] max-w-[400px] flex-col overflow-hidden rounded-lg border border-guvi-line bg-white shadow-[0_24px_80px_rgba(15,23,42,0.24)]">
          <div className="h-1.5 bg-guvi-green" />
          <header className="flex items-center justify-between border-b border-guvi-line bg-white px-4 py-4 text-guvi-ink">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-guvi-green text-black shadow-[0_8px_18px_rgba(25,217,80,0.28)]">
                <Bot size={22} aria-hidden="true" />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-guvi-deepGreen" />
              </div>
              <div>
                <h2 className="text-[17px] font-extrabold leading-tight">Jawa</h2>
                <p className="flex items-center gap-1 text-xs font-bold text-black/55">
                  <Sparkles size={13} aria-hidden="true" />
                  AI course guide online
                </p>
              </div>
            </div>
            <button
              className="flex h-9 w-9 items-center justify-center rounded-md border border-guvi-line bg-guvi-soft text-guvi-ink transition hover:border-guvi-green hover:bg-white"
              type="button"
              aria-label="Close Jawa chat"
              onClick={() => setIsOpen(false)}
            >
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-[#f7fbf8] px-4 py-4">
            <div className="mb-4 rounded-lg border border-guvi-line bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-guvi-deepGreen">Jawa Assistant</p>
              <p className="mt-1 text-sm font-medium leading-6 text-black/65">Get quick guidance on courses, live classes, placement support, and admissions.</p>
            </div>
            <div className="space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[84%] rounded-lg px-4 py-3 text-sm leading-6 ${message.role === "user"
                        ? "bg-guvi-green font-bold text-black shadow-[0_6px_16px_rgba(25,217,80,0.22)]"
                        : "border border-guvi-line bg-white font-medium text-guvi-ink shadow-sm"
                      }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-lg border border-guvi-line bg-white px-4 py-3 text-sm font-bold text-guvi-deepGreen shadow-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-guvi-green" />
                    Jawa is typing...
                  </div>
                </div>
              ) : null}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="border-t border-guvi-line bg-white p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="rounded-full border border-guvi-green/70 bg-guvi-soft px-3 py-1.5 text-xs font-extrabold text-guvi-deepGreen transition hover:bg-guvi-green hover:text-black"
                  type="button"
                  onClick={() => sendMessage(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="jawa-chat-input">
                Message Jawa
              </label>
              <input
                id="jawa-chat-input"
                className="min-w-0 flex-1 rounded-md border border-guvi-line bg-guvi-soft px-3 py-3 text-sm font-medium text-guvi-ink outline-none transition placeholder:text-black/40 focus:border-guvi-green focus:bg-white focus:ring-2 focus:ring-guvi-green/25"
                placeholder="Ask Jawa anything..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <button
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md btn-glossy-green"
                type="submit"
                aria-label="Send message to Jawa"
                disabled={!input.trim() || isTyping}
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <div className="pointer-events-auto flex items-center gap-3">
        <button
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-4 border-white btn-glossy-green shadow-[0_12px_30px_rgba(15,23,42,0.28)] ring-4 ring-[#19d950]/20"
          type="button"
          aria-label={isOpen ? "Close Jawa AI chat" : "Open Jawa AI chat"}
          onClick={() => setIsOpen((currentState) => !currentState)}
        >
          {isOpen ? <X size={30} aria-hidden="true" /> : <MessageCircle size={30} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}

export default FloatingChatButton;

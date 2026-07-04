import { useState } from "react";
import styles from "./Chatbot.module.css";
import { sendMessageToGemini } from "../../services/gemini";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Xin chào! Tôi là AuraBook AI. Tôi có thể giúp gì cho bạn?",
    },
  ]);

const handleSend = async () => {
  if (!input.trim()) return;

  const currentMessage = input;

  // Xóa ô nhập NGAY sau khi bấm gửi
  setInput("");

  const userMessage = {
    sender: "user",
    text: currentMessage,
  };

  setMessages((prev) => [...prev, userMessage]);

  setLoading(true);

  const reply = await sendMessageToGemini(currentMessage);

  setMessages((prev) => [
    ...prev,
    {
      sender: "ai",
      text: reply,
    },
  ]);

  setLoading(false);
};

  return (
    <>
      <button
        className={styles.chatButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.header}>
            <h3>AuraBook AI</h3>

            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          <div className={styles.messages}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.aiMessage
                }
              >
                {message.text}
              </div>
            ))}

            {loading && (
              <div className={styles.aiMessage}>
                AuraBook AI đang trả lời...
              </div>
            )}
          </div>

          <div className={styles.inputArea}>
            <input
              type="text"
              placeholder="Nhập câu hỏi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
            />

            <button
              onClick={handleSend}
              disabled={loading}
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
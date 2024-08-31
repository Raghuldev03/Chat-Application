import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="px-2 my-1" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control border text-sm rounded-lg px-3 py-2 bg-secondary text-white"
          placeholder="Enter your text..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="btn btn-secondary border rounded-lg px-3 py-2 d-flex align-items-center justify-content-center"
          style={{ color: "white", size: "20px" }}
          disabled={loading}
        >
          {loading ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            <FaPaperPlane size={15} />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

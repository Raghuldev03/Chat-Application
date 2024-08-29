import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  return (
    <div
      className="card shadow-sm p-3"
      style={{
        borderRadius: "10px",
        border: "none",
        height: "600px",
        width: "100%",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="card-header bg-secondary text-white px-3 py-2 mb-2">
        <span className="fw-bold">To:</span>
        <span className="text-light fw-bold">Jon Snow</span>
      </div>
      <div className="card-body">
        <Messages />
      </div>
      <div style={{ justifyContent: "flex-end" }}>
        <MessageInput />
      </div>
    </div>
  );
};

export default MessageContainer;

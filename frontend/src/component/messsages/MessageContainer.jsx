import React, { useEffect, useRef } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";
import useGetMessages from "../../hooks/useGetMessages";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { messages, loading, fetchMessages } = useGetMessages();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const refreshMessages = async () => {
    await fetchMessages(); 
  };

  const NoChatSelected = () => (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <TiMessages size={50} style={{ color: "grey" }} />
      <p>No chat selected. Please select a conversation.</p>
    </div>
  );

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
        position: "relative",
      }}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="card-header bg-secondary text-white px-3 py-2 mb-2">
            <span className="fw-bold">To: </span>
            <span className="text-light fw-bold">
              {selectedConversation?.username}
            </span>
          </div>
          <div
            className="card-body"
            style={{
              overflowY: "auto",
              flex: 1,
            }}
          >
            <Messages />
            <div ref={messagesEndRef} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "aliceblue",
              borderTop: "1px solid #ccc",
            }}
          >
            <MessageInput refreshMessages={refreshMessages} />
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

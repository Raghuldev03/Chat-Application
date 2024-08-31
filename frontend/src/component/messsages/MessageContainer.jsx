import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

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
        position: "relative", // add this
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
              overflowY: "auto", // add this
              flex: 1, // add this
            }}
          >
            <Messages />
          </div>
          <div
            style={{
              position: "absolute", // add this
              bottom: 0, // add this
              left: 0, // add this
              width: "100%", // add this
              backgroundColor: "aliceblue", // add this
              borderTop: "1px solid #ccc", // add this
            }}
          >
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  return (
    <div className="d-flex align-items-center justify-content-center w-100 h-100">
      <div className="px-4 text-center text-muted font-weight-semibold d-flex flex-column align-items-center gap-2">
        <p className="h4 mb-2">Welcome</p>
        <p className="mb-2">Select a chat to start messaging</p>
        <TiMessages className="display-4" />
      </div>
    </div>
  );
};

export default MessageContainer;

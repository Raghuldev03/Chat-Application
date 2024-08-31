import React, { useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { messages = [], loading } = useGetMessages();

  const messagesArray = Array.isArray(messages) ? messages : [];

  return (
    <div className="d-flex flex-column p-3 h-100 overflow-auto">
      {!loading && messagesArray.length === 0 && (
        <p className="text-center text-secondary">No messages yet.</p>
      )}
      {messagesArray.map((message) => (
        <div key={message._id} className="mb-2">
          <Message message={message} />
        </div>
      ))}
    </div>
  );
};

export default Messages;

import React, { useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages = [], loading } = useGetMessages();
  
  useListenMessages()
  
  const messagesArray = Array.isArray(messages) ? messages : [];

  return (
    <div className="d-flex flex-column p-3 h-100 overflow-auto">
      {!loading && messagesArray.length === 0 && (
        <p className="text-center text-secondary">No messages yet.</p>
      )}
      {messagesArray.map((message,index) => (
        <div key={message._id || message.id || index} className="mb-2">
          <Message message={message} />
        </div>
      ))}
    </div>
  );
};

export default Messages;

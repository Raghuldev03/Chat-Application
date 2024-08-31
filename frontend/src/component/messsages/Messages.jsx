import React, { useRef } from "react";
import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { messages = [], loading } = useGetMessages();

  // console.log("Messages:", messages); 
  const lastMessageRef = useRef()
  

  return (
    <div className="d-flex flex-column p-3 h-100 overflow-auto">
      <div>
        {/* <p>Loading: {loading.toString()}</p>
        <p>Messages length: {messages.length}</p> */}
        {!loading && messages.length === 0 && (
          <p className="text-center text-secondary ">No messages yet.</p>
        )}
      </div>
      {messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} className="mb-2">
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;

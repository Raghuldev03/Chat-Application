import React from "react";
import userAvatar from "../../assets/user.png";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const Message = ({ message }) => {
  console.log(message)
  const { authUser } = useAuthContext();

  const { selectedConversation } = useConversation();

  const messageFromMe = message.senderId === authUser._id;
  const chatClassName = messageFromMe ? "chat-end" : "chat-start";
  
  const profilePic = messageFromMe
     ? authUser.profilepic
     : selectedConversation?.profilepic;

  const msgBgColor = messageFromMe ? "bg-success" : "";

  return (
    <div className={`d-flex justify-content-end mb-2 chart ${chatClassName}`}>
      <div className={`bg-primary text-white rounded p-2 ${msgBgColor}`}>
        <p>{message.message}</p>
        <div style={{ marginTop: -20}}>
          <small style={{ fontSize: 10 }}>
            {new Date(message.createdAt).toLocaleTimeString()}
          </small>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="avatar me-2">
          <img
            src={profilePic}
            alt="User Avatar"
            className="rounded-circle"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Message;

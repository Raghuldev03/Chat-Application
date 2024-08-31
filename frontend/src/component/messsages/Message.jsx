import React from "react";
import userAvatar from "../../assets/user.png";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";
import { formatTime } from "../../hooks/formatTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();


  const messageFromMe = authUser && message.senderId === authUser._id;
  console.log("messageFromMe:", messageFromMe);

  const chatClassName = messageFromMe ? "chat-end" : "chat-start";

 const profilePic = messageFromMe
   ? authUser.profilepic
   : selectedConversation?.profilepic;

  const msgBgColor = messageFromMe ? "bg-success" : "bg-secondary";

  const createdAt = message.createdAt || new Date().toISOString();
  const formattedTime = formatTime(createdAt);

  return (
    <div
      className={`d-flex justify-content-${
        messageFromMe ? "end" : "start"
      } mb-2 chart ${chatClassName}`}
    >
      {messageFromMe ? (
        <>
          <div className={`bg-primary text-white rounded p-2 ${msgBgColor}`}>
            <p>{message.message}</p>
            <div style={{ marginTop: -20 }}>
              <small style={{ fontSize: 10 }}>{formattedTime}</small>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="avatar me-2 position-relative">
              <img
                src={profilePic}
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="online-status position-absolute top-0 end-0">
                <div
                  className="rounded-circle bg-success"
                  style={{ width: "10px", height: "10px" }}
                ></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex align-items-center">
            <div className="avatar me-2 position-relative">
              <img
                src={profilePic}
                alt="User Avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="online-status position-absolute top-0 end-0">
                <div
                  className="rounded-circle bg-success"
                  style={{ width: "10px", height: "10px" }}
                ></div>
              </div>
            </div>
          </div>
          <div className={`bg-primary text-white rounded p-2 ${msgBgColor}`}>
            <p>{message.message}</p>
            <div style={{ marginTop: -20 }}>
              <small style={{ fontSize: 10 }}>{formattedTime}</small>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;

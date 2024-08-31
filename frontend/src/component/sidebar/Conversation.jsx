import React, { useState } from 'react'
import UserAvatar from '../../assets/user.png'
import useConversation from '../../../zustand/useConversation';

const Conversation = ({ conversation, lastIndex }) => {

  const { selectedConversation, setSelectedConversation } = useConversation()

  const isSelected = selectedConversation?._id === conversation._id;

  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`d-flex gap-2 align-items-center rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-blue" : ""
        } ${isHovered ? "bg-primary" : ""}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar ">
          <div
            className="rounded-circle overflow-hidden"
            style={{ width: "48px", height: "48px" }}
          >
            <img src={conversation.profilepic} alt="" className="img-fluid" />
          </div>
        </div>

        <div className="d-flex flex-column flex-grow-1">
          <div className="d-flex gap-3 justify-content-between">
            <p className="fw-bold text-dark">{conversation.username}</p>
          </div>
        </div>
      </div>
      <div
        className="my-0 py-0"
        style={{ height: "2px", backgroundColor: "#dee2e6" }}
      ></div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation
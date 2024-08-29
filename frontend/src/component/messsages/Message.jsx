import React from "react";
import userAvatar from "../../assets/user.png";

const Message = () => {
  return (
    <div className="d-flex justify-content-end mb-2">
      <div className="bg-primary text-white rounded p-2">Hello</div>
      <div className="d-flex align-items-center">
        <div className="avatar me-2">
          <img
            src={userAvatar}
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

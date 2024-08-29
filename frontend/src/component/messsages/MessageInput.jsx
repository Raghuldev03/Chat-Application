import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // Import the send icon

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control border text-sm rounded-lg px-3 py-2 bg-gray-700 border-gray-600 bg-secondary text-white"
          placeholder="Enter your text..."
        />
        <button
          type="submit"
          className="btn btn-secondary border rounded-lg px-3 py-2 d-flex align-items-center justify-content-center"
          style={{ color: "white", size: "20px" }}
        >
          <FaPaperPlane size={15} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

import React from "react";
import Conversation from "./Conversation";
import useGetConservation from "../../hooks/UseGetConservation";

const Coversations = () => {
  const { loading, conversations } = useGetConservation()
  return (
    <div className="py-2 d-flex flex-column overflow-auto">
      {Array.isArray(conversations) ? (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIndex={index === conversations.length - 1}
          />
        ))
      ) : (
        <div>No conversations available</div>
      )}
    </div>
  );
};

export default Coversations;

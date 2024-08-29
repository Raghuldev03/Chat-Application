import React from "react";
import SearchInput from "../sidebar/SearchInput";
import Coversations from "../sidebar/Coversations";
import LogoutButton from "../sidebar/LogoutButton";

const Sidebar = () => {
  return (
    <div
      className="card shadow-sm p-3"
      style={{
        borderRadius: "10px",
        border: "none",
        height: "500px", 
        width: "100%",
        backgroundColor: "ButtonShadow",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flexShrink: 0 }}>
        {" "}
        <SearchInput />
        <hr className="my-3" />
      </div>
      <div className="card-body" style={{ flex: 1, overflowY: "auto" }}>
        <Coversations />
      </div>
      <div style={{ marginTop: "auto" }}>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;

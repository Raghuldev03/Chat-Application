import React from 'react'
import {BiLogOut} from "react-icons/bi"

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <BiLogOut
        className="bi bi-icon-name text-danger"
        style={{ fontSize: "1.5rem" }}
      />
    </div>
  );
}

export default LogoutButton
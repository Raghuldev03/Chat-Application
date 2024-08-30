import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          className="bi bi-icon-name text-danger"
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={logout}
        />
      ) : (
        <div
          className="spinner-border spinner-border-sm"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;

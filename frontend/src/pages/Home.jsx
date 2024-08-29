import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import MessageContainer from "../component/messsages/MessageContainer";

const Home = () => {
  return (
    <div className="container-fluid h-100 d-flex justify-content-center">
      <div
        className="col-md-6 col-lg-4 mx-auto bg-light border-right"
        style={{
          minHeight: "50vh",
          height: "200",
          maxWidth: "900px",
          width: "500%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ height: "100%" }}>
          <div
            className="container p-4 d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <Sidebar />
            <MessageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Sidebar from "../component/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid h-100 d-flex justify-content-center">
      <div
        className="col-md-6 col-lg-4 mx-auto bg-light border-right"
        style={{
          minHeight: "50vh",
          height: "100",
          maxWidth: "500px",
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={{ height: "100%" }}>
          <Sidebar />
          <div
            className="container p-4 d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            {" "}
            {/* Update this div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

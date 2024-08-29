import React from "react";
import { Link } from "react-router-dom";
import Gendexbox from "../component/Gendexbox";

const Signup = () => {
  return (
    <div
      className="card p-4 shadow-lg"
      style={{
        maxWidth: "500px",
        width: "100%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className="card-title mb-4 text-center " style={{ color: "Blue" }}>
        Signup to Chat-app
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Gender
          </label>
          <Gendexbox></Gendexbox>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          SignUp
        </button>
      </form>
      <div className="mt-3 text-center">
        <p className="mb-0">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

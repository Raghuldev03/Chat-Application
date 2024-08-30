import React from "react";
import "./App.css";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to={"/"} />:<Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"}/> : <Signup />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

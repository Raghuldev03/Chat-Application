import { useState } from "react";
import { useAuthContext } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const handleInputError = ({
  username,
  email,
  password,
  confirmpassword,
  gender
}) => {
  if (!username || !email || !password || !confirmpassword || !gender) {
    toast.error("Please Fill all the fields");
    return true;
  }
  if (password !== confirmpassword) {
    toast.error("Passwords do not match");
    return true
  }
  return false;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    username,
    email,
    password,
    confirmpassword,
    gender
  }) => {
    const checkError = handleInputError({
      username,
      email,
      password,
      confirmpassword,
      gender,
    });
    if (checkError) return;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmpassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log(data);
      //setAuthUser(data.user);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signup };
};

export default useSignup;

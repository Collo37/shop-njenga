import { useRef } from "react";
import { useNavigate } from "react-router";

const LoginLogic = () => {
  const navigate = useNavigate();
  const emailInput = useRef();
  const passwordInput = useRef();

  const signUp = () => {
    navigate("/signup");
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const user = {
      userName: "User",
      email: "testing@test.com",
      password: "Userpassword",
    };
    if (email === user.email && password === user.password) {
      console.log("Login successful");
      localStorage.setItem("user");
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return {
    emailInput,
    passwordInput,
    loginHandler,
    signUp,
  };
};

export default LoginLogic;

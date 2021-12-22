import { useRef } from "react";
import { useNavigate } from "react-router";

const SignUpLogic = () => {
  const navigate = useNavigate();

  const userNameInput = useRef();
  const emailInput = useRef();
  const phoneNumberInput = useRef();
  const passwordInput = useRef();
  const passwordConfirmationInput = useRef();

  const validate = () => {
    const password = passwordInput.current.value;
    const validatePassword = passwordConfirmationInput.current.value;
    password !== validatePassword && alert("Passwords do not match");
    return;
  };

  const logIn = () => {
    navigate("/login");
  };

  const signUp = (event) => {
    event.preventDefault();
    validate();
    navigate("/");
    localStorage.setItem("user", userNameInput.current.value);
  };

  return {
    userNameInput,
    emailInput,
    phoneNumberInput,
    passwordConfirmationInput,
    passwordInput,
    logIn,
    signUp,
  };
};

export default SignUpLogic;

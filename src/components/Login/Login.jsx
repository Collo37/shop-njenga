import LoginLogic from "./LoginLogic";

import Button from "../../components/UI components/Button/Button";

import "./LoginStyles.css";

const Login = () => {
  const { loginHandler, emailInput, passwordInput, signUp } = LoginLogic();
  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={(event) => loginHandler(event)}>
        <input type="email" placeholder="email" ref={emailInput} />
        <input type="password" placeholder="password" ref={passwordInput} />
        <Button
          title="Log in"
          color="orange"
          textColor="black"
          click={(event) => loginHandler(event)}
        />
        <p className="sign-up" onClick={signUp}>
          Don't have an account? <span>Sign up</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

import Button from "../UI components/Button/Button";

import SignUpLogic from "./SignUpLogic";

import "./SignUpStyles.css";

const SignUpForm = () => {
  const {
    userNameInput,
    emailInput,
    phoneNumberInput,
    passwordInput,
    passwordConfirmationInput,
    logIn,
    signUp,
  } = SignUpLogic();
  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={(event) => signUp(event)}>
        <input type="text" placeholder="username" ref={userNameInput} />
        <input type="email" placeholder="email" ref={emailInput} />
        <input
          type="number"
          placeholder="phone number"
          ref={phoneNumberInput}
        />
        <input type="password" placeholder="password" ref={passwordInput} />
        <input
          type="password"
          placeholder="confirm password"
          ref={passwordConfirmationInput}
        />
        <Button
          textColor="black"
          title="Sign up"
          color="orange"
          click={(event) => signUp(event)}
        />
        <p>
          Already have an account? <span onClick={logIn}>Login</span>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;

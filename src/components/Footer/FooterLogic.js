import { useRef } from "react";

const FooterLogic = () => {
  const emailInput = useRef();
  const emailSubmittedHandler = (event) => {
    event.preventDefault();
    let userEmail = emailInput.current.value;
    if (userEmail !== "" && userEmail !== null) {
      console.log(userEmail);
      emailInput.current.value = "";
      alert("Email has been sent");
    }
  };

  const footerLinkHandler = (link) => {
    console.log(link);
  };
  return {
    emailInput,
    emailSubmittedHandler,
    footerLinkHandler,
  };
};

export default FooterLogic;

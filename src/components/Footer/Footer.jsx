import Logo from "../UI components/Logo/Logo";
import Button from "../UI components/Button/Button";
import { pages } from "../../Constants/pages";
import FooterLogic from "./FooterLogic";
import "./FooterStyles.css";

const Footer = () => {
  const { emailInput, emailSubmittedHandler, footerLinkHandler } =
    FooterLogic();
  return (
    <div className="footer">
      <div className="footer-left-section">
        <Logo />
        <div className="location">
          <p>We are located at Ngong</p>
          <p>Phone: +254740581618</p>
          <p>Email: shopnjenga@gmail.com </p>
        </div>
      </div>
      <div className="footer-middle-section">
        <h4>Company</h4>
        {pages.map((page, index) => {
          return (
            <p
              className="footer-link"
              key={index}
              onClick={() => footerLinkHandler(page)}
            >
              {page}
            </p>
          );
        })}
      </div>
      <div
        className="footer-contact-form"
        onSubmit={(event) => emailSubmittedHandler(event)}
      >
        <form className="contact-form">
          <input type="email" placeholder="Email" ref={emailInput} />
          <Button
            title="Send"
            color="maroon"
            click={(event) => emailSubmittedHandler(event)}
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;

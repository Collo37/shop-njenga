import { useNavigate } from "react-router";

import Button from "../../components/UI components/Button/Button";

import "./404.css";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="page-not-found-container">
      <h2>404</h2>
      <p>Sorry. Something went wrong.</p>
      <Button
        title="Back to homepage"
        color="#fc7a1e"
        textColor="white"
        click={() => navigate("/")}
      />
    </div>
  );
};

export default Error404;

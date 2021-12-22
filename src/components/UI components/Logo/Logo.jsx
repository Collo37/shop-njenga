import { useNavigate } from "react-router";
import "./logoStyles.css";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="logo" onClick={() => navigate("/")}>
      <div className="logoStyling">
        <h1>Shop</h1>
      </div>
      <h2>Njenga</h2>
    </div>
  );
};

export default Logo;

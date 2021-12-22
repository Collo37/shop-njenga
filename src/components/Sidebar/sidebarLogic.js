import { useState } from "react";
import { useNavigate } from "react-router";

const SidebarLogic = () => {
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const navigationClickedHandler = (item) => {
    navigate(item.toLowerCase() === "home" ? "/" : `/${item}`);
  };

  const userName = localStorage.getItem("user");

  const logIn = () => navigate("/login");

  return {
    logIn,
    userName,
    showCategories,
    setShowCategories,
    navigationClickedHandler,
  };
};

export default SidebarLogic;

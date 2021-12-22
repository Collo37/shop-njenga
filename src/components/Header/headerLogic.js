import { useState, useRef } from "react";
import { useNavigate } from "react-router";

const HeaderLogic = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showHeaderCategories, setShowHeaderCategories] = useState(false);
  const searchBar = useRef();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const navLinkHandler = (link) => {
    navigate(`/${link !== "home" ? link : ""}`);
  };

  const logIn = () => {
    navigate("/login");
  };

  return {
    searchBar,
    searchTerm,
    setSearchTerm,
    showMenuBar,
    setShowMenuBar,
    showHeaderCategories,
    setShowHeaderCategories,
    navLinkHandler,
    user,
    logIn,
  };
};

export default HeaderLogic;

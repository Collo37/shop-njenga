import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const HeaderLogic = () => {
  const count = useSelector((state) => state.cart.totalItems);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [showHeaderCategories, setShowHeaderCategories] = useState(false);

  const searchBar = useRef();
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    setItemsInCart(count);
  }, [count]);

  const navLinkHandler = (link) => {
    navigate(`/${link !== "home" ? link : ""}`);
  };

  const logIn = () => {
    navigate("/login");
  };

  return {
    itemsInCart,
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

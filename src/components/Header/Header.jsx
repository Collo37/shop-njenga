import { useSelector } from "react-redux";
import {
  FavoriteBorder,
  Menu,
  Person,
  SearchOutlined,
  ShoppingCart,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import SideBar from "../Sidebar/SideBar";
import BackDrop from "../Backdrop/BackDrop";

import NavigationLink from "../UI components/NavigationLInks/NavigationLinks";
import Logo from "../UI components/Logo/Logo";

import headerLogic from "./headerLogic";

import HeaderCategories from "../HeaderCategories/HeaderCategories";
import { menuItems, searchBarFormSubmitHandler } from "../../data/headerData";

import "./headerStyles.css";

const Header = () => {
  const themeColors = useSelector((state) => state.theme);
  const {
    itemsInCart,
    user,
    logIn,
    searchBar,
    searchTerm,
    setSearchTerm,
    showMenuBar,
    setShowMenuBar,
    showHeaderCategories,
    setShowHeaderCategories,
    navLinkHandler,
  } = headerLogic();

  return (
    <div className="headerContainer">
      {showMenuBar ? <SideBar /> : null}
      {showMenuBar ? <BackDrop clicked={() => setShowMenuBar(false)} /> : null}
      <div className="topSection">
        <div className="menu-bar" onClick={() => setShowMenuBar(!showMenuBar)}>
          <Menu style={{ color: themeColors.secondaryColor }} />
        </div>
      </div>
      <div
        className="middleSection"
        onMouseEnter={() => setShowHeaderCategories(false)}
      >
        <div className="middle-items-left">
          <Logo />
        </div>
        <div className="middle-items-center">
          <form
            className="searchbar"
            onSubmit={(event) =>
              searchBarFormSubmitHandler(event, searchTerm, searchBar)
            }
          >
            <input
              type="search"
              placeholder="Search..."
              ref={searchBar}
              onChange={() => setSearchTerm(searchBar.current.value)}
            />
            <SearchOutlined
              style={{ color: "#5d5f5f", cursor: "pointer", marginLeft: 10 }}
            />
          </form>
        </div>
        <div className="middle-items-right">
          <FavoriteBorder
            style={{ color: "#5d5f5f", cursor: "pointer" }}
            onClick={() => navLinkHandler("favorites")}
          />
          <Badge badgeContent={itemsInCart} style={{ color: "#fc7a1e" }}>
            <ShoppingCart
              style={{ color: "#5d5f5f", cursor: "pointer", marginLeft: 10 }}
              onClick={() => navLinkHandler("cart")}
            />
          </Badge>
          <div className="profile">
            <Person
              style={{ color: "#5d5f5f", cursor: "pointer", marginLeft: 10 }}
              onClick={() => navLinkHandler("login")}
            />
            {user ? <p>{user}</p> : <p onClick={logIn}>Sign-in</p>}
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-items-left">
          {menuItems.map((item) => {
            return (
              <NavigationLink
                key={item.id}
                item={item}
                clicked={() => navLinkHandler(item.name.toLowerCase())}
                mouseOver={
                  item.name === "Categories"
                    ? () => setShowHeaderCategories(true)
                    : () => setShowHeaderCategories(false)
                }
              />
            );
          })}
        </div>
        <div className="bottom-items-right">
          <p>
            Extra 20% off save items . Free shipping for orders over ksh 1000.
          </p>
        </div>
      </div>
      <HeaderCategories
        mouseLeave={() => setShowHeaderCategories(false)}
        visible={showHeaderCategories}
      />
    </div>
  );
};

export default Header;

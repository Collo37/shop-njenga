import { ExitToApp, Person, ArrowDownward } from "@material-ui/icons";
import sideBarLogic from "./sidebarLogic";
import SidebarPageItem from "../UI components/SidebarPageItem/SidebarPageItem";
import SidebarCategoryItem from "../UI components/SidebarCategoryItem/SidebarCategoryItem";
import { colors } from "../../Constants/colors";
import { pages } from "../../Constants/pages";
import { categories } from "../../data/bras";
import "./SidebarStyles.css";

const SideBar = () => {
  const {
    showCategories,
    setShowCategories,
    navigationClickedHandler,
    userName,
    logIn,
  } = sideBarLogic();

  return (
    <div className="sidebar-container">
      <div className="sidebar-top-section">
        <div className="user-details">
          <Person style={{ color: colors.secondaryColor[0] }} />
          <h5 className="user-name" onClick={logIn}>
            {userName ? userName : "Sign in"}
          </h5>
        </div>
        <div className="logout-section">
          <ExitToApp style={{ color: colors.secondaryColor[0] }} />
          <h5>Log Out</h5>
        </div>
      </div>
      <div className="sidebar-menu-items">
        {pages.map((page, index) => {
          return (
            <SidebarPageItem
              key={index}
              name={page}
              clicked={() => navigationClickedHandler(page)}
            />
          );
        })}
        <div className="sidebar-menu-item sidebar-categories">
          <div className="toggle-categories">
            <p onClick={() => navigationClickedHandler("categories")}>
              Categories
            </p>
            <ArrowDownward
              onClick={() => setShowCategories(!showCategories)}
              style={{ color: colors.secondaryColor[0], cursor: "pointer" }}
            />
          </div>
          <div
            className={`${
              showCategories ? "sidebar-category" : "categories-invisible"
            }`}
          >
            {categories.map((category, index) => {
              return <SidebarCategoryItem key={index} item={category} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

import { categories } from "../../data/bras";
import "./headerCategoriesStyle.css";

const HeaderCategories = ({ visible, mouseLeave }) => {
  return (
    <div
      className={`categories-container ${visible ? "shown" : "hidden"}`}
      onMouseLeave={mouseLeave}
    >
      {categories.map((category, index) => {
        return (
          <div className="category-item" key={index}>
            <h3 className="category-title">{category.name}</h3>
            {category.categories.map((subcategory, id) => {
              return (
                <p className="subcategory-name" key={id}>
                  {subcategory}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderCategories;

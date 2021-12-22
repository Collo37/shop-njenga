import CategoriesPageLogic from "./CategoriesPageLogic";
import { categories } from "../../data/bras";
import "./CategoriesPageStyles.css";

const CategoriesPage = () => {
  const { categoryClickedHandler } = CategoriesPageLogic();

  return (
    <div className="categories-page-container">
      <div className="shopping-categories">
        {categories.map((category, index) => {
          return (
            <div
              className="shopping-category"
              key={index}
              onClick={() => categoryClickedHandler(category.name)}
            >
              <h2>{category.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;

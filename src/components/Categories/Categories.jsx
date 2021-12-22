import {useNavigate} from "react-router";

import { categories } from "../../data/bras";
import "./CategoriesStyles.css";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="categories__category-item-container">
      {categories.map((category, index) => {
        return (
          <div key={index} className="categories__category-item" onClick={() => navigate(`/categories/${category.name}`)}>
            <p>{category.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

import { useNavigate } from "react-router";

const CategoriesPageLogic = () => {
  const navigate = useNavigate();
  const categoryClickedHandler = (category) => {
    console.log(category);
    navigate(`/categories/${category}`);
  };
  return {
    categoryClickedHandler,
  };
};

export default CategoriesPageLogic;

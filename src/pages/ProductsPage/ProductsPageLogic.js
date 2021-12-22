import { useNavigate } from "react-router";

const ProductsPageLogic = () => {
  const navigate = useNavigate();
  const productClickedHandler = (productId) => {
    navigate(`/product/${productId}`);
  };

  return {
    productClickedHandler,
  };
};

export default ProductsPageLogic;

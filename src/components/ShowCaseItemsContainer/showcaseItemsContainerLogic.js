import { useNavigate } from "react-router";

const ShowCaseItemsContainerLogic = () => {
  const navigate = useNavigate();
  const productClickedHandler = (productId) => {
    navigate(`/product/${productId}`);
  };
  return {
    productClickedHandler,
  };
};

export default ShowCaseItemsContainerLogic;

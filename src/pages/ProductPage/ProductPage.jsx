import ProductPageLogic from "./ProductPageLogic";
import ProductDetailsContainer from "../../components/ProductDetailsContainer/ProductDetailsContainer";

const ProductPage = () => {
  const { product } = ProductPageLogic();

  return (
    <div className="productpage-container">
      <ProductDetailsContainer product={product} />
    </div>
  );
};

export default ProductPage;

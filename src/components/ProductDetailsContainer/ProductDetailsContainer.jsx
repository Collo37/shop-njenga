import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductDetailsContainerStyles.css";

const ProductDetailsContainer = ({ product }) => {
  return typeof product !== undefined ? (
    <div className="product-details-container">
      <img src="" alt={product?.name} className="product-image" />
      <ProductDetails product={product} />
    </div>
  ) : (
    <div>Loading... please wait</div>
  );
};

export default ProductDetailsContainer;

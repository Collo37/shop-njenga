import "./ProductCardStyles.css";

const ProductCard = ({ item, clicked }) => {
  return (
    <div className="product-card-container" onClick={clicked}>
      <div className="product-card-image">Image goes here</div>
      <div className="product-card-details">
        <p className="product-name">{item.name}</p>
        <h5>{item.price}</h5>
      </div>
    </div>
  );
};

export default ProductCard;

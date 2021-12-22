import ShowCaseItemsContainerLogic from "./showcaseItemsContainerLogic";
import ProductCard from "../ProductCard/ProductCard";
import "./ShowCaseItemsContainer.css";

const ShowCaseItemsContainer = ({ title, items }) => {
  const { productClickedHandler } = ShowCaseItemsContainerLogic();
  return (
    <div className="showcase-items-container">
      <div className="showcase-items-title-container">
        <h3 className="showcase-items-title">{title}</h3>
        <h5>show more</h5>
      </div>
      <div className="showcase-items">
        {items.map((item, index) => {
          return (
            <ProductCard
              key={index}
              item={item}
              clicked={() => productClickedHandler(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowCaseItemsContainer;

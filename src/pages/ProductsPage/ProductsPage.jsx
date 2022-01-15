import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Checkbox } from "@material-ui/core";

import ProductCard from "../../components/ProductCard/ProductCard";

import { products } from "../../data/bras";
import ProductsPageLogic from "./ProductsPageLogic";

import "./ProductsPageStyles.css";

const ProductsPage = () => {
  const { productClickedHandler } = ProductsPageLogic();
  const params = useParams();

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const category = params.category;
    setProductList(
      products.filter((product) => {
        return product.category === category;
      })
    );
  }, [params.category]);

  return (
    <div className="products-page-container">
      <div className="products-page-filters">
        <h3 className="filter-title">Filter</h3>

        <div className="sort-parameter">
          <p>Sort by</p>
          <select>
            <option>None</option>
            <option>Price: Lowest to highest</option>
            <option>Price: Highest to lowest</option>
          </select>
        </div>

        <h5 className="filter-title">Material</h5>

        <div className="filter-parameter">
          <label htmlFor="cotton">Cotton</label>
          <Checkbox id="cotton" />
        </div>
        <div className="filter-parameter">
          <label htmlFor="linen">Linen</label>
          <Checkbox id="linen" />
        </div>
        <div className="filter-parameter">
          <label htmlFor="silk">Silk</label>
          <Checkbox id="silk" />
        </div>

        <h5 className="filter-title">Price</h5>

        <div className="filter-parameter">
          <label htmlFor="min-price">Min-price</label>
          <input type="number" id="min-price" defaultValue={100} />
        </div>
        <div className="filter-parameter">
          <label htmlFor="max-price">Max-price</label>
          <input type="number" id="max-price" defaultValue={10000} />
        </div>
      </div>

      <div className="product-list-container">
        {productList.map((product, index) => {
          return (
            <ProductCard
              item={product}
              key={index}
              clicked={() => productClickedHandler(product.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;

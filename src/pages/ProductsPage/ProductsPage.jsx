import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
      <div className="products-page-header"></div>
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

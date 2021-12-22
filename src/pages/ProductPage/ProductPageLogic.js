import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { products } from "../../data/bras";

const ProductPageLogic = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(
      products.find((product) => {
        return product.id.toString() === params.id;
      })
    );
  }, [params.id]);

  return {
    product,
  };
};

export default ProductPageLogic;

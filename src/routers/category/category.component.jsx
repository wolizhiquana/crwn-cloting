import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.components";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryContainer, Title } from "./category.styles";

export async function loader({ params }) {
  return { category: params.category };
}

const Category = () => {
  const { category } = useLoaderData();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;

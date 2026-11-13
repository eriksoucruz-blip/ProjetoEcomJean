import { catalog } from "../../utils/catalog";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
  return (
    <section className="flex flex-wrap mx-auto justify-center p-2 gap-2">
      {catalog.map((product) => (
        <ProductCard {...product} />
      ))}
    </section>
  );
};

export default ProductsContainer;

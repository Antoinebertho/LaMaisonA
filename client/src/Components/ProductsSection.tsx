import { useContext } from "react";
import { ProductContext } from "../contexts/productContext";
import { ProductCard } from "./ProductCard";

export const ProductsSection = () => {
  const { products } = useContext(ProductContext);
  return (
    <section className="bg-gray-50 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-gray-600">
            Tous nos produits
          </h2>

          <p className="mt-4 text-gray-400">
            Trouvez votre bonheur parmi une large sélections d'articles.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

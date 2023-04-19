import { productType } from "../models/productType";

type ProductCardProps = {
  product: productType;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article
      key={product.id}
      className="overflow-hidden rounded-lg shadow transition hover:border-pink-500/20 hover:shadow-pink-500/50"
    >
      <img
        src={product.img}
        alt={product.name}
        className="h-56 w-full object-cover"
      />

      <div className="bg-white p-4 sm:p-6">
        <a href="#">
          <h3 className="mt-0.5 text-lg text-gray-900">
            How to position your furniture for positivity
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        </p>
      </div>
    </article>
  );
};

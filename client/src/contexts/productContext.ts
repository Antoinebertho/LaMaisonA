import { createContext } from "react";
import { productType } from "../models/productType";

export type ProductContextType = {
    products : productType[];
}

export const ProductContext = createContext<ProductContextType>({
    products: [],
})
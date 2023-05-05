import { Product } from "../interfaces/productInterface";

export interface OrderItem {
    id: string;
    products: Product;
    quantity: number;
}
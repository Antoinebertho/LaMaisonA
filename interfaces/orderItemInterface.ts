import { IProduct } from "../interfaces/productInterface";

export interface IOrderItem {
    id: string;
    products: IProduct;
    quantity: number;
}
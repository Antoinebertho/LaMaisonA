import { IOrderItem } from "../interfaces/orderItemInterface";
import { IUser } from "../interfaces/userInterface";

export interface IOrder {
    id: string;
    orderItems: IOrderItem[];
    shippingAddress1: string;
    shippingAddress2: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    status: string;
    totalPrice: number;
    user: IUser;
    dateCreated: Date;
}
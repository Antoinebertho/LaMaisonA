import { OrderItem } from "../interfaces/orderItemInterface";
import { User } from "../interfaces/userInterface";

export interface Order {
    id: string;
    orderItems: OrderItem[];
    shippingAddress1: string;
    shippingAddress2: string;
    city: string;
    zip: string;
    country: string;
    phone: string;
    status: string;
    totalPrice: number;
    user: User;
    dateCreated: Date;
}
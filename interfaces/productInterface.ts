import { ICategory } from "../interfaces/categoryInterface";

export interface IProduct {
    id: string;
    name: string;
    description: string;
    richDescription: string;
    image: string;
    images: string[];
    brand: string;
    price: number;
    category: ICategory;
    countInStock: number;
    rating: number;
    isFeatured: boolean;
    dateCreated: Date;
}
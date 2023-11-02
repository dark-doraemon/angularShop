import { Category } from "./category";

export interface Product {
    productId: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    category: Category;
}
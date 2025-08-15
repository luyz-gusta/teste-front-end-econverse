
import { Icons } from './../utils/icons';

export interface Category {
    name: string;
    icon: keyof typeof Icons;
    subCategory?: string[]
}

export interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
}




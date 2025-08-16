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

export interface Link { 
    title: string;
    options: string[];
}

export interface Response {
    success: boolean;
    products: Product[];
}




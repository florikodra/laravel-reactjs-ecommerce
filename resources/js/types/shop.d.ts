export interface Product {
    id: number;
    slug: string;
    images: string[];
    title: string;
    description: string;
    price: number;
}

export type SingleCardProps = {
    product: Product;
};

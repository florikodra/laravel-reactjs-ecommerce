import { SingleCardProps } from "@/types/shop";
import { AddToCartButton } from "./AddToCartButton";



export const ShopCard = ({ product: { id, title, images, price } }: SingleCardProps) => {

    return (
        <div className="w-full bg-gray-50 rounded-sm shadow-xs hover:bg-gray-100">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={images[0]} alt="product image" />
            </a>
            <div className="px-5 pb-5">
                <a href="#" className="block min-h-[4rem] max-h-[5rem] overflow-hidden">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 line-clamp-2">{ title }</h5>
                </a>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">${price}</span>
                    <AddToCartButton id={id}/>
                </div>
            </div>
        </div>
    )
}

import { Badge, Button, Dropdown } from "@/Components"
import { useCartMutate, useCartQuery } from "@/Services/cartApi";
import { IconMinus, IconShoppingCart, IconShoppingCartMinus } from "@tabler/icons-react"
import { Product } from "@/types/shop";

export const ShoppingCart = () => {

    const { data, isFetched } = useCartQuery();
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <Button mode="primary" className="relative px-5">
                    <IconShoppingCart /> Cart
                    {isFetched && (
                        <Badge mode="primary">{data?.cart?.length || 0}</Badge>
                    )}
                </Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
            {data?.cart?.map((product: Product) => <ShoppingCartItem key={product.id} product={product}/>)}
            </Dropdown.Content>
        </Dropdown>
    )
}

const ShoppingCartItem = ({product }:{ product: Product}) =>{

    const { mutate } = useCartMutate();

    return(
        <div className="flex items-center bg-white shadow-sm overflow-hidden my-1 px-2 pr-3">
            <img className="w-12 h-12 object-cover mr-2" src={product.images[0]} alt={product.title} />
            <div className="flex-1 p-2">
                <div className="font-bold text-md mb-2">{product.title}</div>
                <p className="text-gray-700 text-sm">${product.price}</p>
            </div>
            <div className="">
                <Button mode="danger" className="h-8 w-10" onClick={() => mutate(product.id)}>
                    <IconShoppingCartMinus />
                </Button>
            </div>
        </div>
    )
}

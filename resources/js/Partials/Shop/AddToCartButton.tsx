import { Button } from "@/Components";
import { useCartMutate, useCartQuery } from "@/Services/cartApi";
import { IconShoppingCartPlus, IconShoppingCartMinus } from '@tabler/icons-react';

export const AddToCartButton = ({ id: productId }: { id: number }) => {

    const { mutate } = useCartMutate();
    const { data, isFetched } = useCartQuery();

    const isInCart = () => {
        return data?.cart?.some(item => item.id === productId);
    }

    return (
        <Button onClick={() => mutate(productId)} mode={isInCart() ? "success" : "primary"}>
            {
                isInCart()
                    ?
                    <>
                        <IconShoppingCartMinus /> Remove
                    </>
                    :
                    <>
                        <IconShoppingCartPlus /> Add
                    </>
            }
        </Button>
    )
}

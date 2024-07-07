import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios';

//const queryClient = useQueryClient();

export const useCartQuery = () => {

    const query = useQuery({
        queryKey: ['shopping-cart'],
        queryFn: async () => {
            const { data } = await axios.get<string[]>(route('api.shop.cart.index'));
            return data;
        },
    });

    return { ...query }
};

export const useCartMutate = () => {

    const { refetch } = useCartQuery();

    const mutation = useMutation({
        mutationFn: (productId: number) => axios.post(route('api.shop.cart.toggle', { product: productId})),
        onSuccess: () => refetch(),
      })

    return { ...mutation }
};

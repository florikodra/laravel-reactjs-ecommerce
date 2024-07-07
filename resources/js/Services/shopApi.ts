import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Product } from '@/types/shop';

export const useProductsQuery = () => {

    const [routeUrl, setRouteUrl] = React.useState<string>(route('api.shop.products'));

    const query = useQuery({
        queryKey: ['products', routeUrl],
        queryFn: async () => {
            const { data } = await axios.get<Product[]>(routeUrl);
            return data;
        },
    });

    const setNewRouteUrl = (newUrl: string) => {
        setRouteUrl(newUrl);

        // Smooth scrolling behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return { ...query, setNewRouteUrl }
};

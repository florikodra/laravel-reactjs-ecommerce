import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import { ShopCard, Pagination } from '@/Partials/Shop';
import { useProductsQuery } from '@/Services/shopApi';
import { Product } from '@/types/shop';

export default function Shop(props: any) {

    const { data, isLoading, setNewRouteUrl } = useProductsQuery();

    return (
        <AppLayout>
            <Head title="Shop" />
            <div className="">
                <div className="max-w-5xl mx-auto p-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">

                        {data?.data?.map((product: Product) => (
                            <ShopCard key={product.id} product={product} />
                        ))}
                    </div>

                    <Pagination links={data?.meta?.links ?? []} setNewRouteUrl={setNewRouteUrl}/>
                </div>
            </div>
        </AppLayout>
    );
}




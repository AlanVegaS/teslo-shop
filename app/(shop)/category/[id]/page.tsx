export const revalidate = 60

//import { notFound } from "next/navigation";
import { ProductGrid } from '@/components/products/product-grid/ProductGrid';
import { Title } from '@/components/ui/title/Title';
import { getPaginetedProductsWithImages } from '@/actions/products/product-pagination';
import { Pagination } from '@/components/ui/pagination/Pagination';
import { Gender } from '@/interfaces/product.interface';

interface Props {
    params: {
        id: Gender
    },
    searchParams: {
        page?:string
    }
}

export default async function CategoryPage({ params, searchParams }: Props) {
    const { id: gender } = await params
    const { page } = await searchParams
    const { products, totalPages } = await getPaginetedProductsWithImages({ page: Number(page), gender })

    //if ( id === 'kids') notFound()

    return (
        <div>
            <Title title={gender} />
            <ProductGrid products={products} />
            <Pagination totalPages={totalPages} />
        </div>
    );
}
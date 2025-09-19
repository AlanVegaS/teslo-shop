//import { notFound } from "next/navigation";

import { ProductGrid } from '@/components/products/product-grid/ProductGrid'; 
import { Title } from '@/components/ui/title/Title'; 
import { initialData } from '@/app/seed/seed';

interface Props {
    params:{
        id: string
    }
}

export default async function CategoryPage({params}: Props) {

    const { id: category } = await params
    const products = initialData.products
    const filteredProducts = products.filter(product => product.gender === category)
    

    //if ( id === 'kids') notFound()

    return (
        <div>
            <Title title={category} />
            <ProductGrid products={filteredProducts} />
        </div>
    );
}
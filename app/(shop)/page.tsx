import { initialData } from '../seed/seed';  
import { Title } from '../../components/ui/title/Title';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';
import { getPaginetedProductsWithImages } from '@/actions/products/product-pagination';

const products = initialData.products

export default async function Home() {

  const productsTemp = await getPaginetedProductsWithImages()

  return (
    <>
      <Title title="Shop" />
      <ProductGrid products={products} />
    </>
  );
}
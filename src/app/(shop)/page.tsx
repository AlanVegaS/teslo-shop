import { initialData } from '@/seed/seed';
import { Title } from '../../components/ui/title/Title';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';

const products = initialData.products

export default function Home() {

  return (
    <>
      <Title title="Shop" />
      <ProductGrid products={products} />
    </>
  );
}
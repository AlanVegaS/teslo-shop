import { Title } from '../../components/ui/title/Title';
import { ProductGrid } from '../../components/products/product-grid/ProductGrid';
import { getPaginetedProductsWithImages } from '@/actions/products/product-pagination';
import { redirect } from 'next/navigation';
import { Pagination } from '../../components/ui/pagination/Pagination';

interface Props {
  searchParams: {
    page?: string
  }
}
export default async function Home({ searchParams }: Props) {

  const params = await searchParams
  const page = params.page ? parseInt(params.page) : 1
  const { products, currentPage, totalPages } = await getPaginetedProductsWithImages({ page })

  console.log({ currentPage, totalPages })

  if (products.length === 0) redirect('/')

  return (
    <>
      <Title title="Shop" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
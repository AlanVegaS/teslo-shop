export const revalidate = 604800//7 days
export const dynamic = "force-static";

import { titleFont } from "@/config/fonts"
import { notFound } from "next/navigation"
import SizeSelector from '../../../../components/product/size-selector/SizeSelector';
import { QuantitySelector } from '../../../../components/quantity-selector/QuantitySelector';
import { ProductMobileSlideshow } from '../../../../components/slideshow/ProductMobileSlideshow';
import { ProductSlideshow } from '../../../../components/slideshow/ProductSlideshow';
import { getProductBySlug } from "@/actions/products/get-product-by-slug";
import { StockLabel } from '../../../../components/stock-label/StockLabel';
import { Metadata, ResolvingMetadata } from "next";
import AddToCart from './ui/AddToCart';

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params

    const product = await getProductBySlug(slug)

    return {
        title: product?.title ?? "Product doen't exist",
        description: product?.description ?? "",
        openGraph: {
            title: product?.title ?? "Product doen't exist",
            description: product?.description ?? "",
            images: [`/products/${product?.images[1]}`]
        }
    }
}

export default async function Product({ params }: Props) {
    const { slug } = await params
    const product = await getProductBySlug(slug)

    if (!product) notFound()

    return (
        <div className="md:mt-5 mb-20 grid grid-cols-1 md:grid-cols-3">
            {/**Slideshow */}
            <div className="col-span-1 md:col-span-2">
                <ProductMobileSlideshow images={product.images} className="block md:hidden" />
                <ProductSlideshow images={product.images} className="hidden md:block" />
            </div>
            {/**Details */}
            <div className="col-span-1 px-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${product.price}</p>
                <StockLabel slug={slug} />

                <AddToCart sizes={product.sizes} />

                <h3 className="font-bold text-sm">Description</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    )
}
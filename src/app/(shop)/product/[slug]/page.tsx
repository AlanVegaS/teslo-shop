import { titleFont } from "@/config/fonts"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"
import SizeSelector from '../../../../components/product/size-selector/SizeSelector';
import { QuantitySelector } from '../../../../components/quantity-selector/QuantitySelector';
import { ProductMobileSlideshow } from '../../../../components/slideshow/ProductMobileSlideshow';
import { ProductSlideshow } from '../../../../components/slideshow/ProductSlideshow';

interface Props {
    params: Promise<{ slug: string }>
}

export default async function Product({ params }: Props) {

    const { slug } = await params
    const product = initialData.products.find(product => product.slug === slug)

    if (!product) notFound()

    return (
        <div className="md:mt-5 mb-20 grid grid-cols-1 md:grid-cols-3">
            {/**Slideshow */}
            <div className="col-span-1 md:col-span-2">
                <ProductMobileSlideshow images={product.images} className="block md:hidden"/>
                <ProductSlideshow images={product.images} className="hidden md:block"/>
            </div>
            {/**Details */}
            <div className="col-span-1 px-5">
                <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                    {product.title}
                </h1>
                <p className="text-lg mb-5">${product.price}</p>
                {/**Size */}
                <SizeSelector availableSizes={product.sizes} selectSize={product.sizes[0]} />
                {/**Quantity */}
                <QuantitySelector quantity={1} />
                {/**Button */}
                <button className="btn-primary my-5">
                    Add to cart
                </button>
                {/**Description */}
                <h3 className="font-bold text-sm">Description</h3>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    )
}
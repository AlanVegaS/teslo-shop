import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

interface Props {
    params: Promise<{ slug: string }>
}

export default async function Product({ params }: Props) {

    const { slug } = await params
    const product = initialData.products.find(product => product.slug === slug)

    if(!product) notFound()

    return (
        <div>
            {/**Slideshow */}
            <div className="col-span-1 md:col-span-2 bg-red-300">
hola
            </div>
        </div>
    )
}
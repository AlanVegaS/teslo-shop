'use server'

import { PrismaClient } from "@/app/generated/prisma"

const prisma = new PrismaClient()

export const getProductBySlug = async (slug: string) => {
    try {
        const product = await prisma.product.findFirst({
            include: {
                ProductImage: {
                    select: {
                        url: true
                    }
                }
            },
            where: {
                slug
            }
        })

        if(!product) return null

        const productReturn = {
            id: product.id,
            slug: slug,
            title: product.title,
            price: product.price,
            sizes: product.sizes,
            images: product.ProductImage.map(image => image.url),
            description: product.description,
            gender: product.gender,
            inStock: product.inStock,
            tags: product.tags
        }

        return productReturn
    } catch (error) {
        console.log(error)
        throw new Error('Error to get product by slug')
    }
}
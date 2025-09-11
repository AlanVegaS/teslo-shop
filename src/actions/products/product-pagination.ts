'use server'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getPaginetedProductsWithImages = async() => {
    try {
        const products = await prisma.product.findMany({
            include: {
                ProductImage: {
                    take: 2,
                    select: {
                        url: true
                    }
                }
            }
        })
        console.log(products)
    } catch (error) {
        
    }
}
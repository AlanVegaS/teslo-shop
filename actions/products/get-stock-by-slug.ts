'use server'

import { PrismaClient } from "@/app/generated/prisma"

const prisma = new PrismaClient()

export const getStockBySlug = async (slug: string): Promise<number> => {
    try {
        const stock = await prisma.product.findFirst({
            select: {
                inStock: true
            },
            where: {
                slug
            }
        })

        return stock?.inStock ?? 0
    } catch (error) {
        console.log(error)
        throw new Error('Error to get product by slug')
    }
}
import { PrismaClient } from "../app/generated/prisma"
import { initialData } from "@/app/seed/seed" 

const prisma = new PrismaClient()
//Run seed: npx prisma db seed
//Open Prisma Studio: npx prisma studio
export async function main() {
    const { categories, products } = initialData

    //Delete all data
    await prisma.user.deleteMany()
    await prisma.productImage.deleteMany()
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()

    //Create categories
    const categoriesData = categories.map((name) => ({ name }))
    await prisma.category.createMany({
        data: categoriesData
    })

    //Create users
    await prisma.user.createMany({
        data: initialData.users
    })

    //Create products records
    const categoriesBD = await prisma.category.findMany()
    const categoriesMap = categoriesBD.reduce((map, category) => {
        map[category.name.toLowerCase()] = category.id
        return map
    }, {} as Record<string, string>)

    for (const product of products) {
        const { images, type, ...productToBD } = product
        const productRegistred = await prisma.product.create({
            data: { ...productToBD, categoryId: categoriesMap[type.toLowerCase()] }
        })

        //Create images record
        const imagesData = images.map(image => ({
            url: image,
            productId: productRegistred.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })
    }
}

main()
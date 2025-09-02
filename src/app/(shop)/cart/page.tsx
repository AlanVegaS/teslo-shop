import { initialData } from '@/seed/seed';
import { Title } from '../../../components/ui/title/Title';
import Link from 'next/link';
import Image from 'next/image';
import { QuantitySelector } from '../../../components/quantity-selector/QuantitySelector';

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

export default function CartPage() {
    return (
        <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
            <div className="flex flex-col w-[1000px]">
                <Title title='Cart' />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
                    {/**Cart**/}
                    <div className='flex flex-col mt-5'>
                        <span className='text-xl'>Add more products</span>
                        <Link href="/" className='underline mb-5'>Back
                        </Link>
                    </div>
                    {/**Products**/}
                    {
                        productsInCart.map(product => (
                            <div key={product.slug} className='flex'>
                                <Image className="mr-5 rounded"
                                    src={`/products/${product.images[0]}`}
                                    width={100}
                                    height={100}
                                    alt={product.title}
                                />
                                <div>
                                    <p>{product.title}</p>
                                    <p>${product.price}</p>
                                    <QuantitySelector quantity={3}/>
                                    <button className='underline mt-3'>Remove</button>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    );
}
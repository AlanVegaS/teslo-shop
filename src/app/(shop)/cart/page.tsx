import { initialData } from '@/seed/seed';
import Link from 'next/link';
import Image from 'next/image';
import { QuantitySelector } from '../../../components/quantity-selector/QuantitySelector';
import { Title } from '@/components/ui/title/Title';

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
                        {/**Products**/}
                        {
                            productsInCart.map(product => (
                                <div key={product.slug} className='flex mb-5'>
                                    <Image className="mr-5 rounded"
                                        src={`/products/${product.images[0]}`}
                                        width={100}
                                        height={100}
                                        alt={product.title}
                                    />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>${product.price}</p>
                                        <QuantitySelector quantity={3} />
                                        <button className='underline mt-3'>Remove</button>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                    {/**Checkout**/}
                    <div className='bg-white rounded-xl shadow-xl p-7 h-fit'>
                        <h2 className='text-2xl mb-2 font-bold'>Your order</h2>
                        <div className='grid grid-cols-2'>
                            <span>N Products</span>
                            <span className='text-right'>3 items</span>
                            <span>Subtotal</span>
                            <span className='text-right'>$ 100</span>
                            <span>Tax (15%)</span>
                            <span className='text-right'>$ 15</span>
                            <span className='mt-5 text-2xl'></span>
                            <span className='mt-5 text-2xl text-right'>$ 115</span>
                        </div>
                    <div className='mt-5 mb-2 w-full'>
                        <Link className='flex btn-primary justify-center'
                            href='/checkout/address'>
                            Checkout
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
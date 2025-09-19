'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import './slideshow.css';
import 'swiper/css';

interface Props {
    images: string[];
    className: string

}

export const ProductMobileSlideshow = ({ images, className }: Props) => {

    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100vw',
                    height: '500px'
                }}
                loop={true}
                pagination
                autoplay={{
                    delay: 2500
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper2"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                src={`/products/${image}`}
                                alt={image}
                                width={500}
                                height={500}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
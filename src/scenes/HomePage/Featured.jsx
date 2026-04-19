import Item from "../../components/Item";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

import 'swiper/css';
import 'swiper/css/navigation';

/**
 * Featured Component
 * 
 * Renders a grid of featured products on the homepage.
 */
export default function Featured() {

    const { products } = useContext(ProductsContext);

    const featuredProducts = [
        products.phones[0],
        products.laptops[0],
        products.watches[0],
        products.phones[1],
        products.laptops[1],
        products.watches[1],
        products.phones[2],
        products.watches[2]
    ];


    return (
        <div className="pt-20 pb-10 px-1">
            <div className="container mx-auto p-1">
                <h1 className="text-2xl font-bold">Featured Tech </h1>
                <div className="relative py-10">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        navigation={true}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 }
                        }}
                        style={{ paddingTop: "10px" }}
                    >
                        {featuredProducts.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Item item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
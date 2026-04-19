import Item from "../../components/Item";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";


import 'swiper/css';
import 'swiper/css/navigation';

/**
 * RelatedProducts Component
 * 
 * Displays a suggestion section of products related to the currently viewed item.
 */
export default function RelatedProducts() {


    const { products } = useContext(ProductsContext);

    const relatedProducts = [
        products.phones[0],
        products.laptops[0],
        products.watches[0],
        products.phones[1]
    ];


    return (
        <div className="bg-[#fafafa] py-10 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h2 className="text-[28px] font-bold mb-10 tracking-tight">Related Products</h2>
                <Swiper
                    slidesPerView={2}
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={40}
                    breakpoints={{
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                    }}
                >
                    {relatedProducts.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Item item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
}
import Item from "../../components/Item";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


export default function Recommended() {
    const { products } = useContext(ProductsContext);
    const recommendedData = [
        products.phones?.[0],
        products.laptops?.[0],
        products.watches?.[0],
        products.phones?.[1]
    ].filter(item => item !== undefined);

    if (recommendedData.length === 0) return null;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Recommended for You</h2>
                <Link to="/shop" className="text-blue-500 font-semibold hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-12 gap-5">
                {/* Recommended Items */}
                <Swiper
                    className="col-span-12 w-full"
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={true}
                    loop={recommendedData.length >= 4}
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
                    {recommendedData.map((item, index) => (
                        <SwiperSlide key={item.id || index}>
                            <Item item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
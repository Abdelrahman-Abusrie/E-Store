import { useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Image Component (Product Details)
 * 
 * Displays the main product image and a gallery of thumbnails.
 */
export default function Image() {
    const { item } = useLocation().state;
    const [image, setImage] = useState(item.images[0]);

    return (

        <div className="flex-1 flex flex-col md:flex-row gap-6">
            <div className="flex mx-auto max-w-11/12 flex-row md:flex-col gap-4 order-2 md:order-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 hide-scrollbar">
                {item.images.map((image, index) => (
                    <div key={index} className={`min-w-[70px] p-2 w-[70px] h-[70px] bg-[#f9f9f9] rounded-xl flex items-center justify-center cursor-pointer transition-all border border-gray-300 shadow-sm relative`}
                        onClick={() => {
                            setImage(image);
                        }}
                    >
                        <img src={image} alt={item.title} className=" h-full object-contain" />
                    </div>
                ))}

            </div>

            <div className="md:flex-1 p-10 bg-[#f9f9f9] rounded-[32px] relative flex items-center justify-center order-1 md:order-2 h-[400px] md:h-[550px] overflow-hidden">
                {/* Out of Stock Overlay */}
                {item.availabilityStatus === "Out of Stock" && <div className="absolute top-1/2 -translate-y-1/2 py-1 px-3 font-bold bg-red-500/70 rounded-full -skew-15 text-black text-lg">Out of Stock</div>}
                <img src={image} alt={item.title} className=" h-full w-full object-contain" />
            </div>
        </div>
    );
}
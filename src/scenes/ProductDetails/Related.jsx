import Item from "../../components/Item";
import { featuredProducts } from "../../../public/Data/productsData";

/**
 * RelatedProducts Component
 * 
 * Displays a suggestion section of products related to the currently viewed item.
 */
export default function RelatedProducts() {

    const relatedProducts = featuredProducts.slice(0, 4);

    return (
        <div className="bg-[#fafafa] py-10 md:py-20">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h2 className="text-[28px] font-bold mb-10 tracking-tight">Related Products</h2>
                <div className="grid grid-cols-12 gap-6">
                    {relatedProducts.map(item => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
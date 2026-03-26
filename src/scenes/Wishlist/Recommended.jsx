import { featuredProducts } from "../../../public/Data/productsData";
import Item from "../../components/Item";
import { Link } from "react-router-dom";

export default function Recommended() {
    const recommendedData = featuredProducts.slice(0, 4);
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Recommended for You</h2>
                <Link to="/shop" className="text-blue-500 font-semibold hover:underline">View All</Link>
            </div>

            <div className="grid grid-cols-12 gap-5">
                {recommendedData.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
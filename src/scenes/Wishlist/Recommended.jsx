import Item from "../../components/Item";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductsContext from "../../Contexts/ProductsContext";

export default function Recommended() {
    const { products } = useContext(ProductsContext);
    const recommendedData = [
        products.phones[0],
        products.laptops[0],
        products.watches[0],
        products.phones[1]
    ];
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
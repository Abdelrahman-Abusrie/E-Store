import Item from "../../components/Item";
import { featuredProducts } from "../../../public/Data/productsData";

/**
 * Featured Component
 * 
 * Renders a grid of featured products on the homepage.
 */
export default function Featured() {

    return (
        <div className="pt-20 pb-10">
            <div className="container mx-auto p-1">

                <h1 className="text-2xl font-bold">Featured Tech </h1>

                <div className=" my-6 grid grid-cols-12 gap-5">
                    {featuredProducts.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>

    );
}
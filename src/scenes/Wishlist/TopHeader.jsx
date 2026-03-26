import ShareIcon from '@mui/icons-material/Share';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { wishlistContext } from "../../Contexts/WishlistContext";
import { cartContext } from "../../Contexts/CartContext";

export default function TopHeader() {
    const { wishlistItems } = useContext(wishlistContext);
    const { addToCart } = useContext(cartContext);

    return (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
            <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-2">
                    Your Wishlist
                </h1>
                <p className="text-gray-500">
                    You have {wishlistItems.length} items saved in your collection.
                </p>
            </div>
            <div className="flex flex-wrap gap-4">
                <button
                    className="flex items-center gap-2 cursor-pointer text-black hover:bg-gray-300 font-semibold transition-colors bg-gray-200 px-4 py-2 rounded-full duration-300"
                >
                    <ShareIcon />
                    Share List
                </button >
                <button className="flex items-center gap-2 cursor-pointer text-white hover:bg-blue-700 font-semibold transition-colors bg-blue-600 px-4 py-2 rounded-full duration-300"
                    onClick={(() => {
                        wishlistItems.forEach((item) => {
                            addToCart(item);
                        });
                    })}
                >
                    <AddShoppingCartIcon />
                    Add All to Cart
                </button >
            </div>
        </div>
    );
}
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { wishlistContext } from '../Contexts/WishlistContext';

/**
 * Item Component
 * 
 * Renders a grid item card for a product, displaying its image, title, price,
 * and stock status. Includes a favorite toggle and click navigation to details.
 * 
 */
export default function Item({ item = {} }) {
    const navigate = useNavigate();
    const { wishlistItems, addToWishlist, removeFromWishlist } = useContext(wishlistContext);

    // Derive favorite state from context
    const isInWishlist = wishlistItems.some((fav) => fav.id === item.id);

    const handleFavorite = () => {
        if (isInWishlist) {
            removeFromWishlist(item);
        } else {
            addToWishlist(item);
        }
    };



    return (
        <div className='relative grid-rows-1 h-fit col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden rounded-2xl cursor-pointer hover:-translate-y-1.5 duration-300 '>
            {/* Favorite Icon */}
            <div className=' absolute top-3 z-10 right-5'>
                <button className='cursor-pointer '
                    onClick={handleFavorite}
                >
                    <FavoriteIcon sx={{ fontSize: "30px", color: isInWishlist ? 'red' : "#888" }} />
                </button>
            </div>
            {/* Product Card Body */}
            <div className=" h-[380px] flex flex-col bg-gray-100 " onClick={() => {
                navigate("/product", { state: { item: item } });
                window.scrollTo(0, 0);
            }}>
                {/* Image */}
                <div className="h-48 p-5 bg-gray-200">
                    <img className="h-full w-full object-contain" src={item.image} alt={item.title} />
                </div>
                <Divider />
                {/* Details */}
                <div className='p-4 flex-1 flex flex-col justify-between'>
                    <div className='pb-5'>
                        <h1 className="text-lg font-semibold">
                            {item.title}
                        </h1>
                        <p>{item.variant}</p>
                    </div>
                    <div>
                        <Divider />
                        <div className="pt-5 flex justify-center items-center gap-3">
                            <span className='text-md sm:text-xl font-medium text-gray-500'>Price:</span>
                            <span className='text-md sm:text-xl font-semibold text-blue-800'>${Number(item.price || 0).toFixed(2)}</span>

                        </div>
                    </div>
                </div>
                {/* Out of Stock Overlay */}
                {!item.isInStock && <div className='absolute inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center'>
                    <h1 className='text-white text-md sm:text-xl font-bold px-3 py-1 bg-gray-800/60 rounded-full'>Out of Stock</h1>
                </div>}
            </div>
        </div>
    );
}
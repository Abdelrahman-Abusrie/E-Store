import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { wishlistContext } from '../Contexts/WishlistContext';
import FadeIn from './Fadin';
import {
    Star,
} from '@mui/icons-material';

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
    const safeItemId = item.id || '';
    const isInWishlist = wishlistItems.some((fav) => fav.id === safeItemId);

    const handleFavorite = () => {
        if (isInWishlist) {
            removeFromWishlist(item);
        } else {
            addToWishlist(item);
        }
    };

    const productImage = item.images?.[0] || '/images/placeholder.png'; // Safe access with fallback
    const productTitle = item.title || 'Unnamed Product';
    const productWarranty = item.warrantyInformation || '';
    const productRating = item.rating || 0;
    const productPrice = item.price || 0;
    const isOutOfStock = item.availabilityStatus === "Out of Stock";

    return (
        <div className='relative grid-rows-1 h-fit col-span-6 md:col-span-4 lg:col-span-3 overflow-hidden rounded-2xl cursor-pointer hover:-translate-y-1.5 duration-300 border border-gray-200 shadow-sm'>
            <FadeIn direction='left'>
                {/* Favorite Icon */}
                <div className=' absolute top-3 z-10 right-5'>
                    <button className='cursor-pointer '
                        onClick={handleFavorite}
                    >
                        <FavoriteIcon sx={{ fontSize: "30px", color: isInWishlist ? 'red' : "#888" }} />
                    </button>
                </div>
                {/* Product Card Body */}
                <div className=" h-[380px] flex flex-col bg-gray-100" onClick={() => {
                    navigate("/product", { state: { item: item } });
                    window.scrollTo(0, 0);
                }}>
                    {/* Image */}
                    <div className="h-36 sm:h-40 w-full p-5 bg-gray-200">
                        <img className="h-full w-full object-contain" src={productImage} alt={productTitle} />
                    </div>
                    <Divider />
                    {/* Details */}
                    <div className='p-4 flex-1 flex flex-col justify-between'>
                        <div className='pb-1 flex-1 flex flex-col justify-between'>
                            <h1 className="text-sm sm:text-lg font-semibold">
                                {productTitle}
                            </h1>
                            <div className=''>
                                <p className='text-gray-400 text-[12px] sm:text-md'>{productWarranty}</p>
                                <span className='flex items-center gap-1 text-gray-700 px-1 py-1.5'>{productRating} <Star fontSize="small" className='text-[#ffda47]' /></span>
                            </div>
                        </div>
                        <div>
                            <Divider />
                            <div className="pt-5 flex justify-center items-center gap-3">
                                <span className='text-md sm:text-lg font-medium text-gray-500'>Price:</span>
                                <span className='text-sm sm:text-lg font-semibold text-blue-800'>${Number(productPrice).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    {/* Out of Stock Overlay */}
                    {isOutOfStock && <div className='absolute inset-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center'>
                        <h1 className='text-white text-md sm:text-xl font-bold px-3 py-1 bg-gray-800/60 rounded-full'>Out of Stock</h1>
                    </div>}
                </div>
            </FadeIn>
        </div>
    );
};

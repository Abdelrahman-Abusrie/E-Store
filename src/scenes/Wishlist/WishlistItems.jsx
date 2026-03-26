import { useContext } from 'react';
import { wishlistContext } from '../../Contexts/WishlistContext';
import Item from '../../components/Item';

export default function WishlistItems() {
    const { wishlistItems } = useContext(wishlistContext);

    return (
        <div>
            <div className="grid grid-cols-12 gap-5 pt-5 mb-12 max-h-screen overflow-y-auto">
                {wishlistItems.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </div>
            {wishlistItems.length === 0 && (
                <div className="bg-gray-100 rounded-3xl p-10 text-center">
                    <h2 className="text-2xl font-bold text-gray-700 mb-2">Your wishlist is empty</h2>
                    <p className="text-gray-500">Looks like you haven't added anything to your wishlist yet.</p>
                </div>
            )}
        </div>
    );
}

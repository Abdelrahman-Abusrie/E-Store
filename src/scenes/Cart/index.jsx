import CartItems from './CartItems';
import OrederSummary from './OrderSummary';

/**
 * Cart Page
 * 
 * The main shopping cart layout assembling the CartItems list and OrderSummary.
 */
export default function Cart() {

    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            {/* Header Section */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Cart</h1>
                <p className="text-gray-500">Review your items before proceeding to checkout.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <CartItems />
                <OrederSummary />
            </div>
        </div>
    );
}

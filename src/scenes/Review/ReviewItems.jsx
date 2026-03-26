import { useContext } from 'react';
import { cartContext } from '../../Contexts/CartContext';
import { Divider } from '@mui/material';

export default function ReviewItems() {
    const { cartItems } = useContext(cartContext);

    return (
        <div className="bg-white rounded-2xl shadow-sm border max-h-[500px] overflow-y-auto border-gray-100 p-6 flex flex-col gap-4">

            {cartItems.map((item, index) => (
                <div key={item.id || index}>
                    <div className="flex flex-col sm:flex-row items-center gap-6 py-2">
                        <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex items-center justify-center p-2 border border-gray-100">
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <div className="w-full gap-2 sm:flex-1 flex justify-between">
                            <div className="">
                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.variant}</p>
                                <p className="text-sm font-semibold text-gray-600 mt-2">Qty: {item.quantity || 1}</p>
                            </div>
                            <div className="text-left sm:text-right mt-2 sm:mt-0">
                                <span className="text-xl font-bold text-gray-800">${Number(item.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                            </div>
                        </div>
                    </div>
                    {index < cartItems.length - 1 && <Divider sx={{ my: 2, borderColor: '#aaa' }} />}
                </div>
            ))}
            {/* Empty Cart State */}
            {!cartItems || cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500 font-medium">
                    No items in your order.
                </div>
            ) : null}
        </div>
    );
}

import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../Contexts/CartContext';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import { Divider } from '@mui/material';

export default function SuccessSummary() {
    const { cartItems, subtotal, tax, total, clearCart } = useContext(cartContext);

    // Create a snapshot of the cart data on mount.
    // This ensures the summary persists after clearCart() is called.
    const [orderSnapshot] = useState({
        items: [...cartItems],
        subtotal,
        tax,
        total
    });

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col shadow-sm border border-gray-100 h-full">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800 mb-8">
                <ReceiptOutlinedIcon fontSize="medium" className="text-blue-500" />
                Order Summary
            </h2>
            {/* Cart Items */}
            <div className="flex flex-col gap-6 flex-1 max-h-[300px] overflow-y-auto">
                {orderSnapshot.items.map((item, index) => (
                    <div key={item.id || index} >
                        <div className="flex gap-4 items-center min-w-fit ">
                            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 border border-gray-200">
                                <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            <div className="flex-1 gap-2 flex flex-col sm:flex-row items-start  sm:justify-between">
                                <div className="flex-1">
                                    <h3 className="text-gray-800 font-bold whitespace-nowrap overflow-hidden text-ellipsis mr-2 max-w-[200px]">{item.title}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{item.variant}</p>
                                    <p className="text-gray-500 text-sm mt-1">Qty: {item.quantity || 1}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-gray-800 font-bold">${Number(item.price).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        {/* Divider between items */}
                        {index < orderSnapshot.items.length - 1 && <Divider sx={{ borderColor: '#e5e7eb', my: 2 }} />}
                    </div>
                ))}
            </div>

            <Divider sx={{ borderColor: '#e5e7eb', my: 6 }} />
            {/* Cost Breakdown */}
            <div className="flex flex-col gap-4 text-sm text-gray-600 mb-6 font-medium">
                <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="text-gray-800 font-semibold">${orderSnapshot.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Shipping</span>
                    <span className="text-green-500 font-bold">Free</span>
                </div>
                <div className="flex justify-between items-center">
                    <span>Tax</span>
                    <span className="text-gray-800 font-semibold">${orderSnapshot.tax.toFixed(2)}</span>
                </div>
            </div>

            <div className="flex justify-between items-end mt-2">
                <span className="text-xl font-bold text-gray-800">Total</span>
                <span className="text-3xl font-black text-blue-600">${orderSnapshot.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
        </div>
    );
}

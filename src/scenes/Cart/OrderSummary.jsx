import { useNavigate } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Divider } from '@mui/material';
import { cartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';

/**
 * OrderSummary Component
 * 
 * Displays the financial summary of the cart (Subtotal, Tax, Total).
 * Includes input for promo codes and the 'Proceed to Shipping' button.
 */
export default function OrederSummary() {
    const navigate = useNavigate();
    const { cartItems, subtotal, tax, total } = useContext(cartContext);

    return (
        <div className=" col-span-1">
            <div className="bg-mauve-900 text-white rounded-3xl p-8 flex flex-col gap-6 sticky top-20 shadow-lg">
                <h2 className="text-2xl font-bold">Order Summary</h2>

                {/* Cost Breakdown */}
                <div className="flex flex-col gap-4 text-gray-300 font-medium">
                    <div className="flex justify-between items-center">
                        <span>Subtotal</span>
                        <span className="font-semibold text-gray-300">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Shipping</span>
                        <span className="text-green-400 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Estimated Tax</span>
                        <span className="font-semibold text-gray-300">
                            ${tax.toFixed(2)}
                        </span>
                    </div>
                </div>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.3)' }} />

                <div className="flex justify-between items-end">
                    <span className="text-lg font-bold">Total</span>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-blue-400">
                            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                        <div className="text-xs text-gray-400 mt-1 uppercase tracking-wider">INCLUDING VAT</div>
                    </div>
                </div>

                {/* Promo Code & Checkout */}
                <div className="mt-4">
                    <p className="text-sm font-semibold mb-3">Have a promo code?</p>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Code"
                            className="w-full bg-gray-800 text-white border-none outline-none px-4 py-3 rounded-xl placeholder:text-gray-500"
                        />
                        <button className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                            Apply
                        </button>
                    </div>
                </div>
                <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
                    onClick={() => { navigate('/shipping'); window.scrollTo(0, 0); }}
                    disabled={cartItems.length === 0}
                >
                    <LockOutlinedIcon fontSize="small" />
                    Proceed to Shipping
                </button>

                <p className="text-center text-xs text-gray-400 mt-2 px-4 leading-relaxed">
                    Guaranteed safe & secure checkout with 256-bit encryption.
                </p>

            </div>
        </div>
    );
}
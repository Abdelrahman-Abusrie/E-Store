import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Divider } from '@mui/material';
import { cartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';

export default function ReviewSummary() {
    const navigate = useNavigate();
    const { cartItems, subtotal, tax, total } = useContext(cartContext);



    return (
        <div className="col-span-1">
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
                        <div className="text-xs text-gray-400 mt-1 uppercase">INCLUDING VAT</div>
                    </div>
                </div>
                {/* Place Order Button */}
                <button
                    className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2 shadow-lg shadow-green-500/20"
                    onClick={() => { navigate('/success'); window.scrollTo(0, 0); }}
                    disabled={!cartItems || cartItems.length === 0}
                >
                    <CheckCircleIcon fontSize="small" />
                    Place Order
                </button>

                <p className="text-center text-xs text-gray-400 mt-2 px-4 font-medium">
                    By placing your order, you agree to our Terms of Service and Privacy Policy.
                </p>

            </div>
        </div>
    );
}

import { cartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CheckoutSummary() {
    const navigate = useNavigate();
    const { cartItems, subtotal, tax, total } = useContext(cartContext);

    return (
        <div className="col-span-1">
            <div className="bg-mauve-900 text-white rounded-3xl p-8 flex flex-col gap-6 sticky top-20 shadow-lg">
                <h2 className="text-2xl font-bold">Order Summary</h2>
                {/* Cost Breakdown */}
                <div className="flex flex-col gap-4 text-gray-300 font-medium">
                    <div className="flex justify-between items-center">
                        <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
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
                    </div>
                </div>

                <button className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2" onClick={() => { navigate('/payment'); window.scrollTo(0, 0); }}>
                    Continue to Payment
                    <ArrowForwardIcon fontSize="small" />
                </button>

                <p className="text-center text-xs text-gray-400 mt-2 px-4 leading-relaxed">
                    By proceeding, you agree to our Terms of Service and Privacy Policy.
                </p>

                {/* Cart Preview */}
                {cartItems.length > 0 && (
                    <div className="mt-4 p-5 bg-black/20 rounded-2xl flex flex-col gap-4">
                        <h3 className="text-sm font-bold flex items-center gap-2 text-white">
                            <ShoppingBagOutlinedIcon fontSize="small" className="text-blue-400" />
                            In your cart
                        </h3>

                        <div className="flex flex-col gap-4 overflow-y-auto max-h-64 pr-2">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-white rounded-xl p-1 flex items-center justify-center">
                                        <img src={item.image} alt={item.title || item.name} className="max-h-full max-w-full object-contain" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-200 line-clamp-1">{item.title || item.name}</span>
                                        <span className="text-xs text-gray-400">{item.variant}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

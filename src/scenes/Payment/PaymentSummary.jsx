import { cartContext } from '../../Contexts/CartContext';
import { useContext } from 'react';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function PaymentSummary() {
    const navigate = useNavigate();
    const { cartItems, subtotal, tax, total } = useContext(cartContext);

    return (
        <div className="col-span-1 flex flex-col gap-6 ">
            <div className="bg-mauve-900 text-white rounded-3xl p-8 flex flex-col gap-6  shadow-lg border border-mauve-800">
                <h2 className="text-xl font-bold tracking-wider uppercase">Order Summary</h2>
                {/* Cart Items */}
                <div className="flex flex-col gap-6 overflow-y-auto max-h-72 pr-2 custom-scrollbar">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex gap-4 items-center">
                            <div className="w-16 h-16 bg-white/90 rounded-xl p-2 flex items-center justify-center shrink-0 shadow-inner">
                                <img src={item.image} alt={item.title} className="max-h-full max-w-full object-contain" />
                            </div>
                            <div className="flex flex-col flex-1">
                                <span className="text-sm font-bold text-gray-100 line-clamp-1">{item.title}</span>
                                <span className="text-xs text-gray-400 mt-1">{item.variant}</span>
                                <span className="text-sm font-bold text-blue-400 mt-1">${Number(item.price).toFixed(2)}</span>
                            </div>
                        </div>
                    ))}
                    {/* Empty Cart State */}
                    {cartItems.length === 0 && (
                        <p className="text-gray-400 text-sm">Your cart is empty.</p>
                    )}
                </div>

                <div className="h-px bg-white/20 w-full my-1"></div>
                {/* Cost Breakdown */}
                <div className="flex flex-col gap-4 text-gray-300 font-medium tracking-wide">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Subtotal</span>
                        <span className="font-semibold text-white">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Shipping</span>
                        <span className="text-green-400 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Est. Taxes</span>
                        <span className="font-semibold text-white">
                            ${tax.toFixed(2)}
                        </span>
                    </div>
                </div>

                <div className="h-px bg-white/20 w-full my-1"></div>

                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white tracking-wide">Total Due</span>
                    <div className="text-3xl font-extrabold text-blue-400">
                        ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </div>
                </div>
                {/* Continue to Review Button */}
                <button
                    className="bg-blue-500 mx-auto cursor-pointer hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-colors shadow-md shadow-blue-500/30"
                    onClick={() => {
                        navigate('/review');
                        window.scrollTo(0, 0);
                    }}
                >
                    Continue to Review
                    <ArrowForwardIcon fontSize="small" />
                </button>
            </div>
            {/* Secure Transaction Box */}
            <div className="bg-[#1e2532] text-white rounded-3xl p-6 flex gap-4 items-start shadow-md  border border-gray-700/50">
                <div className="text-blue-500 mt-1 animate-pulse">
                    <VerifiedUserOutlinedIcon />
                </div>
                <div className="flex flex-col gap-1.5">
                    <h3 className="font-bold text-xs tracking-wider">SECURE TRANSACTION</h3>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[90%]">
                        256-bit SSL encrypted connection. Your data is safe with TechStore.
                    </p>
                </div>
            </div>

        </div>
    );
}

import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReviewItems from './ReviewItems';

export default function ReviewDetails() {
    const navigate = useNavigate();

    return (
        <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Shipping Address Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Shipping Details</h2>
                    <button className="text-blue-500 text-sm font-bold hover:underline cursor-pointer" onClick={() => { navigate('/shipping'); window.scrollTo(0, 0); }}>Edit</button>
                </div>
                <div className="text-gray-600 leading-relaxed">
                    <p className="font-semibold text-gray-800">John Doe</p>
                    <p>123 Commerce Blvd, Suite 400</p>
                    <p>New York, NY 10001</p>
                    <p>United States</p>
                    <p className="mt-2 text-sm text-gray-500">Delivery method: <span className="font-semibold text-gray-700">Standard Shipping (3-5 Business Days)</span></p>
                </div>
            </div>

            {/* Payment Method Summary */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
                    <button className="text-blue-500 text-sm font-bold hover:underline cursor-pointer" onClick={() => { navigate('/payment'); window.scrollTo(0, 0); }}>Edit</button>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-white p-2 rounded shadow-sm border border-gray-200">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                    </div>
                    <div className="text-gray-600">
                        <p className="font-semibold text-gray-800">Mastercard ending in 4242</p>
                        <p className="text-sm">Exp: 12/28</p>
                    </div>
                </div>
            </div>

            {/* Order Items */}
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Order Items</h2>
                    <button className="text-blue-500 text-sm font-bold hover:underline cursor-pointer" onClick={() => { navigate('/cart'); window.scrollTo(0, 0); }}>Edit Cart</button>
                </div>
                <ReviewItems />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-200">
                <button
                    onClick={() => { navigate('/payment'); window.scrollTo(0, 0); }}
                    className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                >
                    <ArrowBackIcon fontSize="small" />
                    Back to Payment
                </button>
            </div>
        </div>
    );
}
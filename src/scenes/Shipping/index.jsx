import {
    KeyboardArrowRight,
} from '@mui/icons-material';
import ShippingForm from './ShippingForm';
import DeliveryMethod from './DeliveryMethod';
import CheckoutSummary from './CheckoutSummary';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TopHeader from './TopHeader';

export default function Shipping() {
    const navigate = useNavigate();


    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            {/* Breadcrumbs */}
            <div className="flex gap-2 text-sm text-gray-400 font-medium mb-10">
                <a href="/cart" className="hover:text-blue-500 transition-colors">Cart</a>
                <KeyboardArrowRight fontSize="small" />
                <span className="text-gray-800 font-bold">Shipping</span>
                <KeyboardArrowRight fontSize="small" />
                <span>Payment</span>
            </div>
            {/* Header and Progress Bar */}
            <TopHeader />


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-15">

                {/* Left Column: Form & Methods */}
                <div className="lg:col-span-2 flex flex-col gap-10">
                    <ShippingForm />
                    <DeliveryMethod />
                </div>

                {/* Right Column: Order Summary */}
                <CheckoutSummary />

            </div>
            {/* Action Buttons */}
            <div className="border-t border-gray-200 py-5">
                <button
                    onClick={() => { navigate('/cart'); window.scrollTo(0, 0); }}
                    className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                >
                    <ArrowBackIcon fontSize="small" />
                    Back to Cart
                </button>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentMethods from './PaymentMethods';
import CreditCardForm from './CreditCardForm';
import PaymentSummary from './PaymentSummary';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TopHeader from './TopHeader';

export default function Payment() {
    const navigate = useNavigate();
    const [selectedMethod, setSelectedMethod] = useState('credit');

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <TopHeader />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
                {/* Left Column: Methods & Form */}
                <div className="lg:col-span-2 flex flex-col gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Payment Method</h2>
                        <PaymentMethods selectedMethod={selectedMethod} setSelectedMethod={setSelectedMethod} />
                    </div>

                    {/* Credit Card Form appear when choose Credit */}
                    {selectedMethod === 'credit' && (
                        <div>
                            <CreditCardForm />
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className=" mt-6 pt-6 border-t border-gray-200">
                        <button
                            onClick={() => { navigate('/shipping'); window.scrollTo(0, 0); }}
                            className="flex cursor-pointer items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                        >
                            <ArrowBackIcon fontSize="small" />
                            Back to Shipping
                        </button>
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <PaymentSummary />
            </div>
        </div>
    );
}

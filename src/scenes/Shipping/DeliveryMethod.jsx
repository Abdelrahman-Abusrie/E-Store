import { useState } from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function DeliveryMethod() {
    const [selectedMethod, setSelectedMethod] = useState('standard');

    return (
        <div className="flex flex-col gap-6 mt-4">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <LocalShippingOutlinedIcon className="text-blue-500" />
                Delivery Method
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Standard Shipping */}
                <div
                    onClick={() => setSelectedMethod('standard')}
                    className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative ${selectedMethod === 'standard'
                            ? 'border-blue-500 bg-blue-50/50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                >
                    <div className="absolute top-6 right-6 text-blue-500">
                        {selectedMethod === 'standard' ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon className="text-gray-300" />}
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-gray-800">STANDARD SHIPPING</h3>
                        <p className="text-sm text-gray-500 mb-4">3-5 business days</p>
                        <span className="text-blue-600 font-bold text-lg">FREE</span>
                    </div>
                </div>

                {/* Express Delivery */}
                <div
                    onClick={() => setSelectedMethod('express')}
                    className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 relative ${selectedMethod === 'express'
                            ? 'border-blue-500 bg-blue-50/50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                >
                    <div className="absolute top-6 right-6 text-blue-500">
                        {selectedMethod === 'express' ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon className="text-gray-300" />}
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-gray-800">EXPRESS DELIVERY</h3>
                        <p className="text-sm text-gray-500 mb-4">Next day delivery</p>
                        <span className="text-gray-800 font-bold text-lg">$14.99</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';

export default function TopHeader() {

    useEffect(() => {
        document.getElementById('progress-bar2').classList.add('w-2/3');
    }, []);

    return (
        <div className="mb-10 lg:col-span-3">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
                    <p className="text-gray-500">Step 2: Payment Information</p>
                </div>
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-full text-sm">
                    66% Complete
                </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                <div id='progress-bar2' className="h-full  bg-blue-500 rounded-full w-1/3  transition-all duration-1000"></div>
            </div>
            {/* Steps */}
            <div className="flex justify-between text-xs font-bold tracking-wider">
                <span className='flex items-center gap-1 text-green-500'> <CheckCircleIcon sx={{ fontSize: 14 }} />SHIPPING</span>
                <span className="text-blue-500">PAYMENT</span>
                <span className='text-gray-400'>REVIEW</span>
            </div>
        </div>
    );
}
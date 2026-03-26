import { useEffect } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function TopHeader() {

    useEffect(() => {
        document.getElementById('progress-bar3').classList.add('w-full');
    }, []);

    return (
        <div className="mb-10 lg:col-span-3">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Review Order</h1>
                    <p className="text-gray-500">Step 3: Confirm your details and place the order</p>
                </div>
                <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full text-sm flex items-center gap-2">
                    <CheckCircleIcon fontSize="small" />
                    Final Step
                </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                <div id='progress-bar3' className="h-full bg-blue-500 rounded-full w-2/3 transition-all duration-1000 ease-out"></div>
            </div>

            {/* Steps */}
            <div className="flex justify-between text-xs font-bold text-gray-400 tracking-wider">
                <span className="text-green-500 flex items-center gap-1"><CheckCircleIcon sx={{ fontSize: 14 }} /> SHIPPING</span>
                <span className="text-green-500 flex items-center gap-1"><CheckCircleIcon sx={{ fontSize: 14 }} /> PAYMENT</span>
                <span className="text-blue-500">REVIEW</span>
            </div>
        </div>
    );
}
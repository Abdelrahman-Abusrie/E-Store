import { useEffect } from 'react';


export default function TopHeader() {
    useEffect(() => {
        document.getElementById('progress-bar1').classList.add('w-1/3');
    }, []);
    return (
        <div className="mb-10 lg:col-span-3">
            <div className="flex justify-between items-end mb-4">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Shipping & Delivery</h1>
                    <p className="text-gray-500">Step 1: Enter your details for a smooth delivery</p>
                </div>
                <div className="bg-blue-100 text-blue-600 font-bold px-4 py-2 rounded-full text-sm">
                    33% Complete
                </div>
            </div>
            {/* Progress bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden shadow-inner">
                <div id='progress-bar1' className=" h-full bg-blue-500 rounded-full w-0 transition-all duration-1000"></div>
            </div>
            {/* Steps */}
            <div className="flex justify-between text-xs font-bold text-gray-400 tracking-wider">
                <span className="text-blue-500">SHIPPING</span>
                <span>PAYMENT</span>
                <span>REVIEW</span>
            </div>
        </div>
    );
}
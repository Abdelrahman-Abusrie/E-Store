import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import { useNavigate } from 'react-router-dom';

export default function RightDetails() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-6">
            {/* Shipping Details */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-800 mb-6">
                    <LocalShippingOutlinedIcon fontSize="medium" className="text-blue-500" />
                    Shipping Details
                </h2>
                <div className="text-gray-600 text-[15px] leading-8 font-medium">
                    <p className="text-gray-800 font-bold text-base">John Doe</p>
                    <p>123 Innovation Drive, Suite 400</p>
                    <p>Tech Valley, CA 94043</p>
                    <p>United States</p>
                </div>
            </div>

            {/* Estimated Delivery */}
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold flex items-center gap-3 text-gray-800 mb-6">
                    <QueryBuilderOutlinedIcon fontSize="medium" className="text-blue-500" />
                    Estimated Delivery
                </h2>
                <div className="text-gray-600 text-[15px] leading-8 font-medium">
                    <p>Monday, Oct 23rd -</p>
                    <p>Wednesday, Oct 25th</p>
                </div>
            </div>

            {/* Track Order */}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 duration-300 shadow-md shadow-blue-500/20 cursor-pointer mt-2 text-lg">
                Track Order
                <AssessmentOutlinedIcon fontSize="small" />
            </button>
            {/* Continue Shopping */}
            <button
                className="w-full border-2 border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-bold py-5 rounded-2xl flex items-center justify-center gap-2 duration-300 shadow-sm cursor-pointer text-lg"
                onClick={() => { navigate('/shop'); window.scrollTo(0, 0); }}
            >
                Continue Shopping
                <ArrowForwardIcon fontSize="small" />
            </button>
        </div>
    );
}

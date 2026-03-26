import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function TopHeader() {
    return (
        <div className="flex flex-col items-center justify-center text-center mb-12 pb-4">
            <div className="bg-green-100 text-green-500 rounded-full w-24 h-24 flex items-center justify-center mb-6 mt-4 shadow-sm border border-green-200">
                <CheckCircleOutlineIcon sx={{ fontSize: 48 }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                Thank you for your order!
            </h1>
            <p className="text-gray-500 text-lg mb-2 font-medium">
                Your order <span className="text-blue-500 font-bold tracking-wide">#TP-8829104</span> has been successfully placed and is being processed.
            </p>
            <p className="text-gray-400 text-sm">
                A confirmation email has been sent to john.doe@example.com
            </p>
        </div>
    );
}

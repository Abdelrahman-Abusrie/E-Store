import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function CreditCardForm() {
    return (
        <div className="flex flex-col gap-6 p-2 lg:p-4 bg-gray-100 rounded-2xl">
            {/* Cardholder Name */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Cardholder Name</label>
                <input
                    type="text"
                    placeholder="Johnathan Doe"
                    className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-white border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 duration-300 shadow-sm w-full"
                />
            </div>
            {/* Card Number */}
            <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Card Number</label>
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <LockOutlinedIcon fontSize="small" />
                    </div>
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        className="w-full placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-white border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl pl-12 pr-5 py-4 text-gray-800 transition-all duration-300 shadow-sm"
                    />
                </div>
            </div>
            {/* Expiry Date & CVV */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM / YY"
                        className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-white border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300 shadow-sm w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">CVV</label>
                    <input
                        type="password"
                        placeholder="•••"
                        className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-white border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300 tracking-widest shadow-sm w-full"
                    />
                </div>
            </div>
            {/* Save card information */}
            <div className="flex items-center gap-3 mt-2 pl-1">
                <input type="checkbox" id="saveCard" className="w-5 h-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500 cursor-pointer" />
                <label htmlFor="saveCard" className="text-sm font-medium text-gray-600 cursor-pointer">
                    Save card information for future tech purchases
                </label>
            </div>
        </div>
    );
}

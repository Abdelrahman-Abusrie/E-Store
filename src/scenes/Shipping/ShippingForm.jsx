import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export default function ShippingForm() {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <LocationOnOutlinedIcon className="text-blue-500" />
                Shipping Address
            </h2>
            {/* Name Input  */}
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300"
                    />
                </div>
                {/* Address Input  */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Street Address</label>
                    <input
                        type="text"
                        placeholder="123 Tech Avenue, Silicon Valley"
                        className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300"
                    />
                </div>
                {/* City Input  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">City</label>
                        <input
                            type="text"
                            placeholder="Palo Alto"
                            className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300"
                        />
                    </div>
                    {/* Zip Code  */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">Zip Code</label>
                        <input
                            type="text"
                            placeholder="94301"
                            className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300"
                        />
                    </div>
                </div>
                {/* Phone Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white outline-none rounded-2xl px-5 py-4 text-gray-800 transition-all duration-300"
                    />
                </div>
            </div>
        </div>
    );
}

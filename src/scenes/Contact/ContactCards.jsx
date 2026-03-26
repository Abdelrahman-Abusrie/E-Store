import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";

/**
 * ContactCards Component
 * 
 * Displays contact information (Address, Phone, Email) in a grid of 3 clickable cards.
 */
export default function ContactCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                    <LocationOnOutlined fontSize="large" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Office</h3>
                <p className="text-gray-500 mb-2">123 Tech Avenue, Suite 400</p>
                <p className="text-gray-500">San Francisco, CA 94107</p>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <PhoneOutlined fontSize="large" />
                </div>
                <h3 className="text-xl font-bold mb-3">Phone Number</h3>
                <p className="text-gray-500 mb-2">+1 (555) 123-4567</p>
                <p className="text-gray-500">Mon-Fri 9am-6pm PST</p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                    <EmailOutlined fontSize="large" />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Address</h3>
                <p className="text-gray-500 mb-2">support@techstore.com</p>
                <p className="text-gray-500">sales@techstore.com</p>
            </div>
        </div>
    );
}

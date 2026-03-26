import { EmailOutlined, LocationOnOutlined, PhoneOutlined } from "@mui/icons-material";
import { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';

/**
 * ContactForm Component
 * 
 * Renders a contact form with fields for name, email, subject, and message.
 * Simulates a submission process with a toast notification.
 */
export default function ContactForm() {
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
        e.target.reset();
    };

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Panel: Contact Info */}
                <div className="p-10 md:p-14 bg-gray-900 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-gray-400 mb-10 leading-relaxed">
                        Fill out the form and our team will get back to you within 24 hours. Whether you have a question about products, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <LocationOnOutlined />
                            <span>123 Tech Avenue, San Francisco</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <PhoneOutlined />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-4 text-gray-300">
                            <EmailOutlined />
                            <span>support@techstore.com</span>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="p-10 md:p-14">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">First Name</label>
                                <input required type="text" placeholder="John" className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-400  transition-all bg-gray-50" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Last Name</label>
                                <input required type="text" placeholder="Doe" className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-400  transition-all bg-gray-50" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Email Address</label>
                            <input required type="email" placeholder="john@example.com" className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-400  transition-all bg-gray-50" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Subject</label>
                            <input required type="text" placeholder="How can we help?" className="placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-400  transition-all bg-gray-50" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Message</label>
                            <textarea required rows="4" placeholder="Your message here..." className=" placeholder:opacity-100 placeholder:duration-300 focus:placeholder:opacity-0 px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-gray-400  transition-all bg-gray-50 resize-none"></textarea>
                        </div>

                        <button type="submit" className="mt-4 w-full cursor-pointer py-4 px-6 rounded-xl bg-black text-white font-semibold text-center hover:bg-gray-900 duration-200 shadow-lg shadow-black/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Success Toast */}
            {showToast && (
                <div className='fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl shadow-black/10 border border-gray-200 text-center z-50 animate-bounce'>
                    <div className='text-gray-800 flex items-center gap-2 font-medium'>
                        <AddTaskIcon sx={{ fontSize: "24px", color: "#22c55e" }} />
                        <span>Message Sent Successfully!</span>
                    </div>
                </div>
            )}
        </div>
    );
}

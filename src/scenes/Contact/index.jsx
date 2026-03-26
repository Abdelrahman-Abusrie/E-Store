import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";

/**
 * Contact Page
 * 
 * The main contact us page layout containing the contact info cards and message form.
 */
export default function Contact() {
    return (
        <div className="bg-[#fafafa] py-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We're here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>

                <ContactCards />
                <ContactForm />
            </div>
        </div>
    );
}

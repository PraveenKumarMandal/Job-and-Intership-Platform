import { Anchor, Facebook, Instagram, Send } from "lucide-react";

const Footer = () => {
    return (
        <div className="border-t border-gray-300 bg-white text-black w-full">
            <div className="flex flex-wrap justify-between px-20 py-10 w-full">
                {/* Left Section */}
                <div className="flex flex-col gap-5 w-1/3 min-w-[250px]">
                    <div className="flex items-center text-orange-500">
                        <Anchor className="h-6 w-6 mr-2" />
                        <div className="text-xl font-semibold">CAREER-90</div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Job portal with user profiles, skill updates, certifications, work experience, and admin job postings.
                    </p>
                    <div className="flex gap-4 text-orange-500">
                        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
                            <Instagram className="h-5 w-5" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
                            <Send className="h-5 w-5" />
                        </div>
                        <div className="bg-gray-100 p-3 rounded-full cursor-pointer hover:bg-gray-200 transition">
                            <Facebook className="h-5 w-5" />
                        </div>
                    </div>
                </div>
                {/* Right Section - Fully Expanded */}
                <div className="flex flex-1 justify-between text-center gap-10 flex-wrap">
                    {/* Example Category 1 */}
                    <div className="min-w-[180px]">
                        <h4 className="text-lg font-semibold text-orange-500 mb-4">Company</h4>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">About Us</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Careers</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Contact</p>
                    </div>
                    {/* Example Category 2 */}
                    <div className="min-w-[180px]">
                        <h4 className="text-lg font-semibold text-orange-500 mb-4">Resources</h4>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Blog</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Help Center</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Privacy Policy</p>
                    </div>
                    {/* Example Category 3 */}
                    <div className="min-w-[180px]">
                        <h4 className="text-lg font-semibold text-orange-500 mb-4">Support</h4>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">FAQs</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Terms of Service</p>
                        <p className="text-sm text-black hover:text-blue-600 cursor-pointer mb-2 transition-transform hover:translate-x-1">Report Issue</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;

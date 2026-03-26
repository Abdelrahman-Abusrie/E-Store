import {
    KeyboardArrowDown
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

/**
 * Details Component
 * 
 * Renders the extended textual description and technical specifications table for the product.
 */
export default function Details() {
    const { item } = useLocation().state;

    return (
        <div className="bg-[#fafafa] py-16 ">
            <div className="max-w-[1100px] mx-auto px-4 md:px-8">
                <div className=" bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold mb-8 ">Details</h2>
                    <p className="text-gray-500 mb-12 text-[15px]">
                        Just as a heavily utilized by its views, the first thing you notice when you pick up a modern smartphone is the display. Nothing is aplomb, because advance the throughout the rest of the ecosystem in a nice, consistent design language. Both critics and non-consumers praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.
                    </p>
                    {item.title !== 'Watch' && (
                        <>
                            <h3 className="text-xl font-bold mb-6 ">Screen</h3>
                            <div className="space-y-5 mb-12">
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">Screen diagonal</span><span className="text-gray-600">6.7"</span></div>
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">The screen resolution</span><span className="text-gray-600">2796x1290</span></div>
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">The screen refresh rate</span><span className="text-gray-600">120 Hz</span></div>
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">The pixel density</span><span className="text-gray-600">460 ppi</span></div>
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">Screen type</span><span className="text-gray-600">OLED</span></div>
                                <div className="flex justify-between border-b pb-4 items-start">
                                    <span className="text-[#111] font-medium mt-1">Additional</span>
                                    <div className="flex flex-col text-right text-gray-600 ">
                                        <span>Dynamic Island</span>
                                        <span>Always-On display</span>
                                        <span>HDR display</span>
                                        <span>True Tone</span>
                                        <span>Wide color (P3)</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-6 ">CPU</h3>
                            <div className="space-y-5 mb-10">
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">CPU</span><span className="text-gray-600">A16 Bionic</span></div>
                                <div className="flex justify-between border-b pb-4"><span className="text-[#111] font-medium">Number of cores</span><span className="text-gray-600">6</span></div>
                            </div>
                        </>
                    )}
                    <div className=" mt-6">
                        <button className=" mx-auto flex items-center gap-3 cursor-pointer px-8 py-3 border border-[#e0e0e0] rounded-full font-semibold text-sm hover:bg-gray-50 duration-200">
                            View more <KeyboardArrowDown fontSize="small" className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
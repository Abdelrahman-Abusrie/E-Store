import SendIcon from '@mui/icons-material/Send';
import {
    Star,
    StarBorder,
    StarHalf,
    KeyboardArrowDown
} from '@mui/icons-material';
import { useLocation } from 'react-router-dom';

/**
 * Reviews Component
 * 
 * Displays product ratings breakdown (bars) and a list of user reviews.
 */
export default function Reviews() {
    const { item } = useLocation().state;

    return (
        <div className="bg-white py-10 md:p-20">
            <div className="max-w-[1100px] mx-auto px-4 md:px-10">
                <div className=" mx-auto">
                    <h2 className="text-[28px] font-bold mb-10 ">Reviews</h2>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 bg-[#fafafa] rounded-4xl p-8 md:p-12 mb-12">
                        {/* Overall Rating Score */}
                        <div className="flex flex-col items-center justify-center bg-[#fafafa] md:bg-white md:p-10 md:rounded-3xl md:shadow-sm w-full md:w-auto border border-gray-100">
                            <span className="text-[55px] font-bold text-gray-900 mb-3">{item.rating}</span>
                            <span className="text-[15px] font-medium text-gray-500 mb-5">of 125 reviews</span>
                            <div className="flex text-[#ffda47] gap-1">
                                {Array.from({ length: 5 }, (_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <span key={i}>
                                            {item.rating >= ratingValue ? (
                                                <Star fontSize="small" />
                                            ) : item.rating >= ratingValue - 0.5 ? (
                                                <StarHalf fontSize="small" />
                                            ) : (
                                                <StarBorder fontSize="small" />
                                            )}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bars */}
                        <div className="flex-1 flex flex-col justify-center gap-4 w-full">
                            {[
                                { label: 'Excellent', count: 100, progress: 85 },
                                { label: 'Good', count: 11, progress: 15 },
                                { label: 'Average', count: 3, progress: 5 },
                                { label: 'Below Average', count: 8, progress: 10 },
                                { label: 'Poor', count: 1, progress: 2 },
                            ].map(row => (
                                <div key={row.label} className="flex items-center gap-6 text-[15px]">
                                    <span className="w-32 text-gray-800 font-medium">{row.label}</span>
                                    <div className="flex-1 h-2 bg-[#f0f0f0] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#ffb547] rounded-full" style={{ width: `${row.progress}%` }}></div>
                                    </div>
                                    <span className="w-8 text-right text-gray-400 font-medium">{row.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mb-10 ">
                        <input type="text" placeholder="Leave Comment" className="w-full bg-[#f9f9f9] border border-gray-200 rounded-2xl pl-6 pr-15 py-5 outline-none focus:border-gray-400 focus:bg-white transition-all font-medium placeholder-gray-400" />
                        <SendIcon sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", right: "20px", cursor: "pointer" }} />
                    </div>

                    {/* Comment List */}
                    <div className="space-y-8">
                        {/* Comment 1 */}
                        {item.reviews.map((review, index) => {
                            return (<div key={index} className="bg-[#fafafa] p-8 rounded-3xl">
                                <div className="flex justify-between items-start mb-5">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden shadow-sm">
                                            <img src="https://i.pravatar.cc/201" alt="avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 ">{review.
                                                reviewerName}</h4> {/* */}
                                            <div className="flex text-[#ffb547] text-sm mt-1">
                                                {Array.from({ length: 5 }, (_, i) => {
                                                    const ratingValue = i + 1;
                                                    return (
                                                        <span key={i}>
                                                            {review.rating >= ratingValue ? (
                                                                <Star fontSize="small" />
                                                            ) : review.rating >= ratingValue - 0.5 ? (
                                                                <StarHalf fontSize="small" />
                                                            ) : (
                                                                <StarBorder fontSize="small" />
                                                            )}
                                                        </span>
                                                    );
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-400">{review.date}</span>
                                </div>
                                <p className="text-gray-500 text-[15px] leading-[1.8]">
                                    {review.comment}
                                </p>
                            </div>);
                        })}
                    </div>

                    <div className=" mt-10">
                        <button className="mx-auto flex items-center gap-3 cursor-pointer px-8 py-3 border border-[#e0e0e0] rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors">
                            View more <KeyboardArrowDown fontSize="small" className="text-gray-400" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
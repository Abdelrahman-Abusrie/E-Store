import { useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router-dom";

/**
 * Landing Component
 * 
 * The hero section of the homepage.
 * Displays major sections (iPhone 14, PS5, AirPods, Vr, Macbook) in a responsive grid layout.
 */
export default function Landing() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery('(max-width:767px)');

    return (
        <div >
            <div className=" w-full relative bg-mauve-900 flex items-end" >
                {/* Main Hero */}
                <div className="container  mx-auto p-2 flex gap-y-5 h-full items-center ">
                    {/* Text */}
                    <div className='absolute sm:relative basis-1/2 flex z-20 flex-col h-full items-start justify-center'>
                        <p className="text-gray-500 text-md " >Pro.Beyond.</p>
                        <h1 className="text-white text-6xl font-thin">IPhone 14 <span className="font-bold">Pro</span></h1>
                        <p className="text-gray-500 text-md my-3">Created to change everything for the better, For everyone</p>
                        <button className='text-white px-6 py-1.5 bg-white/8 hover:bg-white/10 cursor-pointer border rounded border-white mt-2 font-bold capitalize '
                            onClick={() => {
                                navigate('/shop');
                            }} >Shop Now</button>
                    </div>
                    {/* image */}
                    <div className='flex-1' >
                        <div className="z-10 absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
                        <img className='z-0 animate-pulse h-full max-h-96 mx-auto object-cover' src="../../../images/bg1.png" alt="iphone" />
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div className="w-full sm:h-[400px] flex flex-col sm:flex-row">
                <div className="basis-1/2">
                    {/* Playstation Section */}
                    <div className="h-1/2 flex flex-col text-center sm:flex-row items-center">
                        <img className="h-[200px] sm:h-full ml-0 sm:-ml-[80px] " src="../../../images/ps.jpg" alt="Playstation" />
                        <div className="p-3">
                            <h1 className="font-bold text-3xl ">Playstation 5</h1>
                            <p className="text-sm mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequ aperiam possimus a ad modi,adipisicing el.</p>
                        </div>
                    </div>
                    {/* AirPods Section */}
                    <div className="flex flex-col sm:flex-row h-1/2">
                        <div className="basis-1/2 flex flex-col sm:flex-row items-center bg-[#ececec] " >
                            <img className="h-[200px] sm:h-full ml-0 sm:-ml-[120px]" src="../../../images/hp.png" alt="Airpods" />
                            <div className="p-3">
                                <p className="text-2xl ">Apple {!isMobile && <br />} AirPods <span className="font-bold">Max</span></p>
                                <p className="text-[12px] text-gray-500 mt-2 font-semibold">Computational audio{!isMobile && <br />}Listen, it's powerful</p>
                            </div>
                        </div>
                        {/* VR Section */}
                        <div className="basis-1/2 overflow-hidden flex flex-col sm:flex-row items-center bg-neutral-800 text-white">
                            <img className="h-[200px] sm:h-full ml-0 sm:-ml-[130px]" src="../../../images/vr.png" alt="VR" />
                            <div className="p-3">
                                <p className="text-2xl ">Apple {!isMobile && <br />} Vision <span className="font-bold">Pro</span></p>
                                <p className="text-[11px] text-gray-400 mt-2 font-semibold">An immersive way to {!isMobile && <br />}experience entertainment</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Macbook Section */}
                <div className="basis-1/2 overflow-hidden flex flex-col sm:flex-row items-center bg-[#eee]" >
                    <div className="flex-1 p-3 text-center md:p-10 order-2 sm:order-0">
                        <h1 className="text-4xl font-thin ">Macbook <span className="font-semibold">Air</span></h1>
                        <p className="my-3 text-sm text-gray-400">The new 15-inch MacBook makes room for more of what you love with a spacious Liquid Retina display</p>
                        <button className='text-black px-6 py-1.5 bg-black/8 hover:bg-black/10 cursor-pointer border rounded border-gray-400 mt-2 font-medium capitalize '
                            onClick={() => {
                                navigate('/shop');
                            }} >Shop Now</button>

                    </div>
                    <img className="h-[200px] sm:h-full ml-0 sm:-mr-[200px]" src="../../../images/lp.png" alt="MacBook" />

                </div>
            </div>
        </div>
    );
}
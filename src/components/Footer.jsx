import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import categoryContext from '../Contexts/CategoryContext';

/**
 * Footer Component
 * 
 * Displays the site footer with logo, social links, quick links, and support information.
 */
export default function Footer() {
    const navigate = useNavigate();
    const { setCat } = useContext(categoryContext);

    return (
        <div className="pt-10 bg-mauve-950 text-white">
            <div className="container mx-auto p-1 grid grid-cols-8 gap-5">
                {/* Column 1: Logo & Socials */}
                <div className="col-span-8 md:col-span-2 p-2">
                    {/* logo */}
                    <h1 className='text-xl uppercase font-bold font-serif'>
                        <FlashOnOutlinedIcon />
                        TechStore
                    </h1>
                    <p className='text-sm text-gray-400 mt-5'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    {/* Social Icons */}
                    <div className="pt-10 flex gap-3">
                        <GoogleIcon sx={{ cursor: "pointer", transition: "0.3s", ':hover': { color: "#aaa" } }} />
                        <FacebookOutlinedIcon sx={{ cursor: "pointer", transition: "0.3s", ':hover': { color: "#aaa" } }} />
                        <TwitterIcon sx={{ cursor: "pointer", transition: "0.3s", ':hover': { color: "#aaa" } }} />
                        <InstagramIcon sx={{ cursor: "pointer", transition: "0.3s", ':hover': { color: "#aaa" } }} />
                    </div>
                </div>
                {/* Column 2: Quick Links */}
                <div className="col-span-4 md:col-span-2 p-2">
                    {/* head  */}
                    <h1 className='text-lg font-semibold'>
                        Quick Links
                    </h1>
                    {/* links  */}
                    <ul className='text-gray-400 py-5'>
                        <li className='duration-300 hover:pl-0.5'><button className=' cursor-pointer' onClick={() => { setCat("SmartPhones"); navigate("/shop"); }}>Phones</button></li>
                        <li className='my-3 duration-300 hover:pl-0.5'><button className=' cursor-pointer' onClick={() => { setCat("Tablets"); navigate("/shop"); }}>Tablets</button></li>
                        <li className='duration-300 hover:pl-0.5'><button className=' cursor-pointer' onClick={() => { setCat("Watches"); navigate("/shop"); }}>Watches</button></li>
                    </ul>
                </div>
                {/* Column 3: Support */}
                <div className="col-span-4 md:col-span-2 p-2">
                    {/* head  */}
                    <h1 className='text-lg font-semibold'>
                        Support
                    </h1>
                    {/* links  */}
                    <ul className="text-gray-400 py-5">
                        <li className='duration-300 hover:pl-0.5'><button className=' cursor-pointer' onClick={() => { navigate("/contact"); }}>Customer Service</button></li>
                        <li className='my-3 duration-300 hover:pl-0.5'><a href="">Track Order</a></li>
                        <li className='mb-3 duration-300 hover:pl-0.5'><a href="">Repairs</a></li>
                        <li className='duration-300 hover:pl-0.5'><a href="">Warranty</a></li>
                    </ul>
                </div>

                {/* Column 4: Company */}
                <div className="col-span-2 p-2">
                    {/* head  */}
                    <h1 className='text-lg font-semibold'>
                        Company
                    </h1>
                    {/* links  */}
                    <ul className="text-gray-400 py-5">
                        <li className='duration-300 hover:pl-0.5'><a href="">About Us</a></li>
                        <li className='my-3 duration-300 hover:pl-0.5'><a href="">Shipping Policy</a></li>
                        <li className='mb-3 duration-300 hover:pl-0.5'><a href="">Sustainability</a></li>
                        <li className='duration-300 hover:pl-0.5'><a href="">Privacy</a></li>
                    </ul>
                </div>

            </div>
            <Divider sx={{ backgroundColor: "#aaa" }} />
            <div className="p-5 text-gray-400 text-center">
                © 2026 TechStore. ABUSRIE #1
            </div>
        </div>
    );
}
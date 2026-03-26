import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useState, useRef, useEffect } from 'react';
import { cartContext } from '../Contexts/CartContext';
import { wishlistContext } from '../Contexts/WishlistContext';
import MiniCart from './MiniCart';

/**
 * Header Component
 * 
 * The main navigation bar. Handles responsive states (mobile/desktop),
 * search visibility, and access to Cart, Wishlist, and Profile.
 */
function Header() {
    const navigate = useNavigate();
    const { cartItems } = useContext(cartContext); //for lenght to span
    const { wishlistItems } = useContext(wishlistContext);//for lenght to span
    const isMobile = useMediaQuery('(max-width:767px)');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const searchInputRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef(null);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Auto-focus input when search becomes active
    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    // Close mobile menu when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="z-30 bg-white border-b border-gray-200 shadow-sm relative" >
            <div className='flex justify-between gap-5 items-center container mx-auto px-4 h-16'>
                {/* Left Panel: Logo & Search */}
                <div className=' flex-1 flex gap-4 md:gap-10 items-center justify-between lg:justify-start transition-all duration-300'>
                    {/* Logo (Hidden on mobile when search is active) */}
                    {(!isMobile || !isSearchActive) && (
                        <div className="logo uppercase font-bold font-serif text-lg cursor-pointer text-gray-800 flex items-center gap-1" onClick={() => {
                            navigate('/');
                        }}>
                            <FlashOnOutlinedIcon />
                            <span>TechStore</span>
                        </div>
                    )}
                    {/* Search Bar */}
                    <div
                        className={`flex items-center bg-gray-100 text-gray-500 transition-all duration-300 overflow-hidden ${isMobile
                            ? (isSearchActive ? 'flex-1 rounded-full px-4 py-2 gap-2 opacity-100' : 'w-10 h-10 rounded-full justify-center items-center cursor-pointer')
                            : 'flex-1 max-w-xs rounded-md p-2 gap-3'
                            }`}
                        onClick={() => {
                            if (isMobile && !isSearchActive) setIsSearchActive(true);
                        }}
                    >
                        <SearchIcon className={isMobile && !isSearchActive ? "text-gray-600" : "text-gray-400"} onClick={() => { if (isMobile && !isSearchActive) setIsSearchActive(true); }} />

                        <input
                            ref={searchInputRef}
                            type="text"
                            name="search"
                            placeholder='Search'
                            className={`outline-none text-md bg-transparent transition-all duration-300 ${isMobile && !isSearchActive ? 'w-0 opacity-0 hidden' : 'w-full flex-1 opacity-100'
                                } placeholder:duration-500 focus:placeholder:opacity-0`}
                            onBlur={(e) => {
                                if (isMobile && e.target.value === '') {
                                    setIsSearchActive(false);
                                }
                            }}
                        />

                        {/* Close button on search*/}
                        {isMobile && isSearchActive && (
                            <span
                                className="text-gray-400 text-sm font-bold px-2 py-0.5 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-full transition-colors flex items-center justify-center"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsSearchActive(false);
                                    if (searchInputRef.current) searchInputRef.current.value = '';
                                }}
                            >
                                ✕
                            </span>
                        )}
                    </div>
                </div>

                {/* Hide mobile nav icons when searching */}
                {(!isMobile || !isSearchActive) && (
                    <div ref={navRef}>
                        {isMobile && <MenuIcon className="cursor-pointer text-gray-700 hover:text-black transition-colors" onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                        }} />}
                        {/* Nav Links */}
                        <div id='nav' className={` flex ${isMobile ? (isMenuOpen ? 'absolute flex-col gap-y-5 top-16 right-4 z-20 w-48 p-4 bg-white border border-gray-100 shadow-xl rounded-xl' : 'hidden') : 'relative gap-10 items-center'} `}>
                            <ul className={`nav ${isMobile ? 'flex-col' : ''}  flex gap-6 font-semibold text-mist-700  `}>
                                <li id='home' className='nav-item duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/');
                                }}>Home</li>
                                <li id='shop' className='nav-item duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/shop');
                                }}>Shop </li>
                                <li id='contact' className='nav-item duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/contact');
                                }}>Contact US</li>
                            </ul>
                            {/* User Actions: Wishlist, Cart, Profile */}
                            <div className="flex gap-3" >
                                {/* Wishlist Icon */}
                                <div className='relative  cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/wishlist');
                                }} >
                                    <FavoriteBorderIcon />
                                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{wishlistItems.length > 99 ? '99+' : wishlistItems.length}</span>
                                </div>
                                {/* Cart Icon */}
                                <div className='relative cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsCartOpen(true);
                                }}>
                                    <ShoppingCartOutlinedIcon />
                                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{cartItems.length}</span>
                                </div>
                                {/* Profile Icon */}
                                <div className='relative cursor-pointer'
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        navigate('/login');
                                    }}>
                                    <PersonOutlineOutlinedIcon />
                                </div>

                            </div>
                        </div >
                        {/* Mini Cart Drawer */}
                        <MiniCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
                    </div>
                )}
            </div >
        </div >

    );
}


export default Header;

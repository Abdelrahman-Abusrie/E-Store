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
import ProductsContext from '../Contexts/ProductsContext';
import { profileActiveContext } from '../Contexts/ProfileActiveContext';
import ErrorIcon from '@mui/icons-material/Error';

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
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { allProducts } = useContext(ProductsContext);
    const [profileOpen, setProfileOpen] = useState(false);
    const { isProfileActive, setIsProfileActive } = useContext(profileActiveContext);
    const [showErrorToast, setShowErrorToast] = useState(false);

    useEffect(() => {
        if (searchQuery.length > 0) {
            const filteredResults = allProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredResults);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, allProducts]);

    const handleProductClick = (product) => {
        navigate("/product", { state: { item: product } });
        setSearchQuery('');
        setSearchResults([]);
    };

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
            <div className='flex justify-between gap-3 items-center my-container mx-auto px-4 h-16 relative'>
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
                        className={`flex items-center bg-gray-100 text-gray-500 transition-all duration-300 ${isMobile
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
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                            }}
                            value={searchQuery}
                        />

                        {/* Close button on search*/}
                        {isMobile && isSearchActive && (
                            <span
                                className="text-gray-400 text-sm font-bold px-2 py-0.5 cursor-pointer hover:bg-gray-200 hover:text-gray-600 rounded-full transition-colors flex items-center justify-center"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsSearchActive(false);
                                    setSearchQuery('');
                                }}
                            >
                                ✕
                            </span>
                        )}

                        {/* Search Results */}
                        {searchQuery && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] bg-white border border-gray-200 rounded-md mt-2">
                                {searchResults.length > 0 ? (
                                    <div className="max-h-60 overflow-y-auto">
                                        {searchResults.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
                                                onClick={() => handleProductClick(product)}
                                            >
                                                <img
                                                    src={product.thumbnail}
                                                    alt={product.title}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900 text-sm">{product.title}</p>
                                                    <p className="text-gray-500 text-xs">{product.category}</p>
                                                </div>
                                                <p className="font-semibold text-gray-900">${product.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-4">
                                        <p className="text-gray-500">No results found for "<span className="font-semibold text-gray-700">{searchQuery}</span>"</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Hide mobile nav icons when searching */}
                {(!isMobile || !isSearchActive) && (
                    <div ref={navRef} >
                        {isMobile && <MenuIcon className="cursor-pointer text-gray-700 hover:text-black transition-colors" sx={{ fontSize: 27 }} onClick={() => {
                            setIsMenuOpen(!isMenuOpen);
                            setProfileOpen(false);
                        }} />}
                        {/* Nav Links */}
                        <div id='nav' className={` flex overflow-hidden  ${isMobile ? `absolute flex-col top-full right-4 z-20 bg-white border-gray-100 shadow-xl rounded-lg transition-all duration-300 ease-in-out w-48  ${isMenuOpen ? 'max-h-96 border border-gray-200' : 'max-h-0 border-0 pointer-events-none'} ` : 'relative pt-2 gap-10 items-center mr-5'} `}>
                            <ul className={`nav px-4 py-4 ${isMobile ? 'flex-col' : ''}  flex gap-6 font-semibold text-mist-700  `}>
                                <li id='home' className='nav-item font-semibold duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/');
                                }}>Home</li>
                                <li id='shop' className='nav-item font-semibold duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/shop');
                                }}>Shop </li>
                                <li id='contact' className='nav-item font-semibold duration-300 hover:text-black cursor-pointer' onClick={() => {
                                    setIsMenuOpen(false);
                                    navigate('/contact');
                                }}>Contact US</li>
                            </ul>
                        </div >

                        {/* Mini Cart Drawer */}
                        <MiniCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
                    </div>
                )}
                {/* User Actions: Wishlist, Cart, Profile */}
                <div>
                    <div className='flex gap-3 items-center'>
                        {!isMobile && (
                            <div className='flex gap-3'>
                                {/* Wishlist Icon */}
                                <div className='relative cursor-pointer' onClick={() => {
                                    if (!isProfileActive) {
                                        setShowErrorToast(true);
                                        setTimeout(() => {
                                            setShowErrorToast(false);
                                        }, 2000);
                                        return;
                                    };
                                    setProfileOpen(false);
                                    navigate('/wishlist');
                                }} >
                                    <FavoriteBorderIcon />
                                    <span className='absolute -top-0.5 -right-1.5 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{isProfileActive ? (wishlistItems.length > 99 ? '99+' : wishlistItems.length) : 0}</span>
                                </div>
                                {/* Cart Icon */}
                                <div className='relative cursor-pointer' onClick={() => {
                                    if (!isProfileActive) {
                                        setShowErrorToast(true);
                                        setTimeout(() => {
                                            setShowErrorToast(false);
                                        }, 2000);
                                        return;
                                    };
                                    setProfileOpen(false);
                                    setIsCartOpen(true);
                                }}>
                                    <ShoppingCartOutlinedIcon />
                                    <span className='absolute -top-0.5 -right-1.5 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{isProfileActive ? (cartItems.length > 99 ? '99+' : cartItems.length) : 0}</span>
                                </div>
                            </div>
                        )}
                        {/* Profile Icon */}
                        {isProfileActive ? (
                            <div className='relative w-8 h-8 border-2 border-gray-300 rounded-full cursor-pointer'
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                    setIsMenuOpen(false);
                                }}>
                                <img src="./images/Avatar.png" alt="avatar" />
                            </div>
                        ) : (
                            <div className='relative cursor-pointer'
                                onClick={() => {
                                    setProfileOpen(!profileOpen);
                                    setIsMenuOpen(false);
                                }}>
                                <PersonOutlineOutlinedIcon />
                            </div>
                        )}
                    </div>

                    <div className={`absolute top-full right-4 w-48 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out z-20 overflow-hidden ${profileOpen ? 'max-h-96 border border-gray-200' : 'max-h-0 border-0 pointer-events-none'}`}>
                        <div className='py-2'>
                            {isProfileActive && (
                                <div>
                                    <div className='px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer' onClick={() => {
                                        setProfileOpen(false);
                                    }}>Profile</div>

                                </div>
                            )}
                            {isMobile &&
                                <div>
                                    {/* Wishlist Icon */}
                                    <div className='relative px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => {
                                        if (!isProfileActive) {
                                            setShowErrorToast(true);
                                            setTimeout(() => {
                                                setShowErrorToast(false);
                                            }, 2000);
                                            return;
                                        };
                                        setProfileOpen(false);
                                        navigate('/wishlist');
                                    }} >
                                        <FavoriteBorderIcon />
                                        <span className='absolute top-1 left-7 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{isProfileActive ? (wishlistItems.length > 99 ? '99+' : wishlistItems.length) : 0}</span>
                                    </div>
                                    {/* Cart Icon */}
                                    <div className='relative px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => {
                                        if (!isProfileActive) {
                                            setShowErrorToast(true);
                                            setTimeout(() => {
                                                setShowErrorToast(false);
                                            }, 2000);
                                            return;
                                        };
                                        setProfileOpen(false);
                                        setIsCartOpen(true);
                                    }}>
                                        <ShoppingCartOutlinedIcon />
                                        <span className='absolute top-1 left-7 bg-red-500 text-white text-[10px] rounded-full w-5 h-3.5 flex items-center justify-center'>{isProfileActive ? (cartItems.length > 99 ? '99+' : cartItems.length) : 0}</span>
                                    </div>

                                    {/* Logout Icon */}
                                    {isProfileActive && <div className='px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer' onClick={() => {
                                        setProfileOpen(false);
                                        setIsProfileActive(false);
                                        navigate('/');
                                    }}>Logout</div>}
                                </div>
                            }

                            {/* Logout Icon */}
                            {isProfileActive && !isMobile && <div className='px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer' onClick={() => {
                                setProfileOpen(false);
                                setIsProfileActive(false);
                                navigate('/');
                            }}>Logout</div>}

                            {!isProfileActive && (
                                <div>
                                    <div className='px-4 py-2 font-semibold hover:bg-gray-100 cursor-pointer' onClick={() => {
                                        setProfileOpen(false);
                                        navigate('/login');
                                    }}>Login</div>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div >
            {/* Error Toast */}
            {showErrorToast && (
                <div className='fixed bottom-4 right-4 bg-white p-4 rounded-xl shadow-xl shadow-black/10 border border-gray-200 text-center z-50 animate-bounce'>
                    <div className='text-gray-800 flex items-center gap-2 font-medium'>
                        <ErrorIcon sx={{ fontSize: "24px", color: "#ef4444" }} />
                        <span>Please Login First!</span>
                    </div>
                </div>
            )}
        </div >
    );
}


export default Header;

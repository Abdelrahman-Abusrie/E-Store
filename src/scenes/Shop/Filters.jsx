import TuneIcon from '@mui/icons-material/Tune';
import CategoryIcon from '@mui/icons-material/Category';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import Slider from '@mui/material/Slider';


import { useState, useEffect } from 'react';

export default function Filters({ showFilters, setShowFilters, cat, setCat, availableBrands, selectedBrand, onBrandSelect, maxPrice, setMaxPrice }) {
    const [openCat, setOpenCat] = useState(true);
    const [openBrand, setOpenBrand] = useState(true);
    const [openPrice, setOpenPrice] = useState(true);

    const [price, setPrice] = useState(maxPrice || 2000);

    useEffect(() => {
        if (maxPrice !== undefined) {
            setPrice(maxPrice);
        }
    }, [maxPrice]);

    const handleOpenCat = () => setOpenCat(!openCat);
    const handleOpenBrand = () => setOpenBrand(!openBrand);

    function handleOpenPrice() {
        setOpenPrice(!openPrice);
    }

    return (
        <div >
            <div className='lg:hidden absolute top-2 left-3 p-1 bg-white/70 border border-gray-300 rounded-md  cursor-pointer'>
                <TuneIcon sx={{ fontSize: "30px" }} onClick={() => setShowFilters(true)} />
            </div>
            <div className={`lg:block w-60 bg-gray-50 p-5 rounded-sm ${showFilters ? "absolute top-0 left-0 w-72 h-full bg-white z-50" : "hidden"}`}>
                {/* Header */}
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className="text-lg font-semibold"> <TuneIcon /> Filters</h1>
                        <p className=' uppercase text-sm py-2 text-gray-600'>Refine your Search</p>
                    </div>
                    {showFilters && <span className='cursor-pointer text-lg font-bold text-gray-600 hover:text-gray-800 hover:scale-110 duration-300' onClick={() => setShowFilters(false)}>✕</span>}
                </div>
                {/* Categories  */}
                <div>
                    <div className='flex pt-5 justify-between cursor-pointer' onClick={handleOpenCat}>
                        <div className='flex gap-3'><CategoryIcon /> <h1 className='font-semibold'>Category</h1> </div>{openCat ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</div>
                    {openCat && <div>
                        <ul className='py-3 pl-4 text-gray-800'>
                            <li className=' cursor-pointer'>
                                <div className='flex items-center gap-1.5'
                                    onClick={() => setCat("Smartphones")}>
                                    {cat === "Smartphones" ? <CheckCircleIcon sx={{ fontSize: "20px", color: "#0077ff" }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: "20px" }} />}
                                    Smartphones
                                </div>
                            </li>
                            <li className=' cursor-pointer'>
                                <div className='flex items-center gap-1.5'
                                    onClick={() => setCat("Laptops")}>
                                    {cat === "Laptops" ? <CheckCircleIcon sx={{ fontSize: "20px", color: "#0077ff" }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: "20px" }} />}
                                    Laptops
                                </div>
                            </li>
                            <li className=' cursor-pointer'>
                                <div className='flex items-center gap-1.5'
                                    onClick={() => setCat("Watches")}>
                                    {cat === "Watches" ? <CheckCircleIcon sx={{ fontSize: "20px", color: "#0077ff" }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: "20px" }} />}
                                    Watches
                                </div>
                            </li>
                        </ul>
                    </div>}
                </div>
                {/* Brand */}
                <div>
                    <div className='flex pt-5  justify-between cursor-pointer' onClick={handleOpenBrand}>
                        <div className='flex gap-3'><BrandingWatermarkOutlinedIcon /> <h1 className='font-semibold'>Brand</h1> ({availableBrands.length})</div>{openBrand ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</div>
                    {openBrand && <div>
                        <ul className='py-3 pl-4 text-gray-800 max-h-48 overflow-y-auto'>
                            <li className='cursor-pointer'>
                                <div className='flex items-center gap-1.5'
                                    onClick={() => onBrandSelect('all')}>
                                    {selectedBrand === 'all' ? <CheckCircleIcon sx={{ fontSize: "20px", color: "#0077ff" }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: "20px" }} />}
                                    All
                                </div>
                            </li>
                            {availableBrands.map((brand) => (
                                <li key={brand} className='cursor-pointer'>
                                    <div className='flex items-center gap-1.5'
                                        onClick={() => onBrandSelect(selectedBrand === brand ? '' : brand)}>
                                        {selectedBrand === brand ? <CheckCircleIcon sx={{ fontSize: "20px", color: "#0077ff" }} /> : <RadioButtonUncheckedIcon sx={{ fontSize: "20px" }} />}
                                        {brand}
                                    </div>
                                </li>
                            ))}
                            {availableBrands.length === 0 && (
                                <li className='text-gray-500 py-2'>Loading brands...</li>
                            )}
                        </ul>
                    </div>}
                </div>

                {/* Price Slider */}
                <div>
                    <div className='flex pt-5 justify-between cursor-pointer' onClick={handleOpenPrice}>
                        <div className='flex gap-3'><PaymentsOutlinedIcon /> <h1 className='font-semibold'>Price Range</h1> </div>{openPrice ? <ArrowDropDownIcon /> : <ArrowLeftIcon />}</div>
                    {openPrice && <div className="px-2 mt-2">
                        <Slider
                            value={price}
                            onChange={(e, val) => setPrice(val)}
                            onChangeCommitted={(e, val) => setMaxPrice(val)}
                            min={0}
                            max={2000}
                            sx={{
                                color: '#1E90FF',
                                height: 8,
                                '& .MuiSlider-track': {
                                    border: 'none',
                                },
                                '& .MuiSlider-thumb': {
                                    height: 20,
                                    width: 20,
                                    backgroundColor: '#fff',
                                    border: '4px solid currentColor',
                                    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                                        boxShadow: '0px 0px 0px 8px rgba(30, 144, 255, 0.16)',
                                    },
                                    '&::before': {
                                        display: 'none',
                                    },
                                },
                                '& .MuiSlider-rail': {
                                    opacity: 1,
                                    backgroundColor: '#cbd5e1',
                                },
                            }}
                        />
                        <div className='flex justify-between items-center text-gray-500 text-sm mt-1 mb-2 font-medium'>
                            <span>$0</span>
                            <span className='p-1 border border-gray-300 rounded-md'>${price}</span>
                            <span>$2000</span>
                        </div>
                    </div>}
                </div>
            </div >
        </div>
    );
};

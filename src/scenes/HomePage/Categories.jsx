import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import categoryContext from '../../Contexts/CategoryContext';
import { useContext } from 'react';

/**
 * Categories Component
 * 
 * Displays a grid of product categories (Phones, Tablets, Watches).
 * Each category card redirects to the shop filtered by that category.
 */
export default function Categories() {

    return (
        <div className="pt-20 bg-gray-100 pb-10">
            <div className="container mx-auto p-1">
                <h1 className="text-2xl font-bold">Browse By Category </h1>
                <p className="text-sm text-gray-500">Find the perfect tech for your lifestyle</p>
                <div className="my-6 grid grid-cols-3 gap-8 ">
                    <Cat title={"SmartPhones"} desc={"Latest flagship devices"} image={"mobiles.png"} cat="SmartPhones" />
                    <Cat second={true} title={"Tablets"} desc={"Professional productivity"} image={"tablet.png"} cat="Tablets" />
                    <Cat title={"Watches"} desc={"Connected wellness"} image={"watch.png"} cat="Watches" />

                </div>
            </div>
        </div>
    );
}


function Cat({ second = false, title, desc, image }) {
    const navigate = useNavigate();
    const { setCat } = useContext(categoryContext);

    return (
        <div className={`cat-box cursor-pointer h-60 relative overflow-hidden col-span-3 sm:col-span-1 ${second ? "bg-mist-200" : "bg-neutral-800"} rounded-3xl`}
            onClick={() => {
                setCat(title);
                navigate("/shop");
            }}
        >
            {/* Image */}
            <img className="h-full w-full mx-auto duration-300 object-contain " src={`../../../images/${image}`} alt="" />
            {/* Overlay Body */}
            <div className=' absolute w-full h-full py-3.5 px-7 bg-[rgba(0,0,0,0.3)] top-0 flex flex-col justify-end '>
                <h1 className="text-xl font-semibold text-white">{title}</h1>
                <div className='flex justify-between items-end'>
                    <p className={`text-sm ${second ? "text-gray-800" : "text-gray-400"} py-1 `}>{desc}</p>
                    <ArrowForwardIcon className={`mr-2 ${second ? "text-gray-900" : "text-gray-300"}`} />
                </div>
            </div>
        </div>
    );
}
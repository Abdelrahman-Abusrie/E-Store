import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * Sale Component
 * 
 * Promotional banner section displayed on the homepage.
 * Contains a call-to-action to navigate to the shop.
 */
export default function Sale() {
    const navigate = useNavigate();
    return (
        <div className=" relative py-10 px-1.5 bg-mauve-900 w-full overflow-hidden h-[400px] " >
            {/* Dark Overlay */}
            <div className=" absolute inset-0 z-10 bg-[rgba(0,0,0,0.5)]"></div>
            {/* tablet image */}
            <img className=" absolute h-96  top-0 -left-40" src="../../../images/2.png" alt="efq" />
            {/* watch image */}
            <img className=" absolute w-80 -right-30 md:right-0 -bottom-20 rotate-25" src="../../../images/1.png" alt="efq" />
            {/* phone image */}
            <img className=" absolute w-80 -right-50 md:right-10 top-0 rotate-180" src="../../../images/3.png" alt="efq" />

            {/* Content */}
            <div className="flex z-20 flex-col text-white justify-center items-center absolute w-full h-full top-0" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                <h1 className="text-6xl font-thin" >Big Summer <span className="font-bold">Sale</span></h1>
                <p className="text-sm py-5">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <Button sx={{ color: "white", borderColor: "white", p: "10px 30px" }} variant="outlined" onClick={() => {
                    const home = document.getElementById('home');
                    const shop = document.getElementById('shop');
                    home.classList.remove('active');
                    shop.classList.add('active');
                    navigate('/shop');
                }}>Shop Now</Button>
            </div>
        </div>
    );
}
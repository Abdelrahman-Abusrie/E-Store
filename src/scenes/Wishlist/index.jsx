import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import WishlistItems from "./WishlistItems";
import TopHeader from "./TopHeader";
import Recommended from "./Recommended";

export default function Wishlist() {


    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="container mx-auto px-4 py-10 min-h-screen">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-400 mb-6 font-medium">
                <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
                <span className="mx-2">&gt;</span>
                <span className="text-gray-800">Wishlist</span>
            </div>

            <TopHeader />
            {/* Favorites Grid */}
            <WishlistItems />

            <Divider sx={{ borderColor: '#e5e7eb', my: 8 }} />
            <Recommended />
        </div>
    );
}

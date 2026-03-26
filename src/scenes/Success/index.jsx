import { useEffect } from 'react';
import { Divider } from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

import TopHeader from './TopHeader';
import SuccessSummary from './SuccessSummary';
import RightDetails from './RightDetails';

export default function Success() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <TopHeader />

            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <SuccessSummary />
                <RightDetails />
            </div>

            {/* Footer */}
            <div className="max-w-4xl mx-auto">
                <Divider sx={{ borderColor: '#e5e7eb', my: 8 }} />

                <div className="flex flex-col items-center justify-center text-center gap-4 text-gray-500 text-sm font-medium mb-12">
                    <p>Need help with your order?</p>
                    <div className="flex gap-6 items-center cursor-pointer">
                        <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors font-bold">
                            <HelpOutlineOutlinedIcon fontSize="small" />
                            Help Center
                        </a>
                        <a href="#" className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors font-bold">
                            <MailOutlineOutlinedIcon fontSize="small" />
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

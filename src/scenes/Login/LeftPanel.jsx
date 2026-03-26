import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';

const LeftPanel = () => {
    return (
        <div className="hidden md:flex flex-col justify-center flex-1 relative overflow-hidden bg-slate-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 opacity-60 mix-blend-overlay bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80")' }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-linear-to-t from-slate-900 via-teal-900/40 to-slate-900/20"></div>

            <div className="relative z-10 px-16 xl:px-24">
                <div className="mb-16 flex items-center gap-2 text-white font-bold text-3xl  ">
                    <FlashOnOutlinedIcon fontSize='large' />
                    <span>TechStore</span>
                </div>

                <div className="w-fit px-4 py-1 animate-pulse rounded-full bg-blue-400/40 backdrop-blur-sm border border-slate-200/20 mb-6">
                    <span className="text-xs font-semibold text-blue-200 tracking-widest uppercase">Premium Electronics</span>
                </div>

                <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight">
                    Stay connected.<br />
                    <span className="text-blue-500">Stay ahead.</span>
                </h2>

                <p className="text-slate-300 text-lg mt-6 max-w-md leading-relaxed font-light">
                    Step into the future with precision-crafted devices for a connected world.
                </p>



            </div>
        </div>
    );
};

export default LeftPanel;

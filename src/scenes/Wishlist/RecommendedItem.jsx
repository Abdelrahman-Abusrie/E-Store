import { useNavigate } from 'react-router-dom';

export default function RecommendedItem({ item = {} }) {
    const navigate = useNavigate();
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3 flex flex-col cursor-pointer group" onClick={() => { navigate("/product"); window.scrollTo(0, 0); }}>
            <div className="h-64 rounded-3xl p-6 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2" style={{ backgroundColor: item.bgColor || '#f3f4f6' }}>
                <img className="h-full object-contain" src={item.image} alt={item.title} />
            </div>
            <h3 className="text-gray-800 font-bold mb-1 text-sm">{item.title}</h3>
            <p className="text-blue-500 font-black">${Number(item.price || 0).toFixed(2)}</p>
        </div>
    );
}

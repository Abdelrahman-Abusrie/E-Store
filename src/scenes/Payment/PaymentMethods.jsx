import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AppleIcon from '@mui/icons-material/Apple';

export default function PaymentMethods({ selectedMethod, setSelectedMethod }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Credit/Debit */}
            <div
                onClick={() => setSelectedMethod('credit')}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all flex flex-col items-center justify-center gap-3 relative overflow-hidden ${selectedMethod === 'credit'
                    ? 'border-blue-500 bg-blue-50/50 text-blue-600 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
            >
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 ${selectedMethod === 'credit' ? 'border-none bg-blue-500' : 'border-gray-300'} flex items-center justify-center transition-colors`}>
                    {selectedMethod === 'credit' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
                <CreditCardIcon fontSize="large" className={selectedMethod === 'credit' ? 'text-blue-500' : 'text-gray-400'} />
                <span className={`font-bold ${selectedMethod === 'credit' ? 'text-gray-800' : 'text-gray-600'}`}>Credit / Debit</span>
            </div>

            {/* PayPal */}
            <div
                onClick={() => setSelectedMethod('cash')}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all flex flex-col items-center justify-center gap-3 relative overflow-hidden ${selectedMethod === 'cash'
                    ? 'border-blue-500 bg-blue-50/50 text-blue-600 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                    }`}
            >
                <div className={`absolute top-4 right-4 w-5 h-5 rounded-full border-2 ${selectedMethod === 'cash' ? 'border-none bg-blue-500' : 'border-gray-300'} flex items-center justify-center transition-colors`}>
                    {selectedMethod === 'cash' && <div className="w-2 h-2 rounded-full bg-white"></div>}
                </div>
                <AccountBalanceWalletIcon fontSize="large" className={selectedMethod === 'cash' ? 'text-blue-500' : 'text-gray-400'} />
                <span className={`font-bold ${selectedMethod === 'cash' ? 'text-gray-800' : 'text-gray-600'}`}>Cash</span>
            </div>

        </div>
    );
}

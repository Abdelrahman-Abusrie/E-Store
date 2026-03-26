import { useState } from 'react';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';


const RightPanel = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const schema = yup.object().shape({
        email: yup.string().email('Invalid email address'),
        password: yup.string().min(6, 'Password must be at least 6 characters long'),
    });

    const validEmail = "test@TechStore.com";
    const validPassword = "123456";

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, rememberMe } = data;

        schema.validate({ email, password }, { abortEarly: false })
            .then(() => {
                setErrors({});
                console.log('Login attempt:', { email, password, rememberMe });
                if (email === validEmail && password === validPassword) {
                    setIsLoading(true);
                    setTimeout(() => {
                        setIsLoading(false);
                        navigate('/');
                    }, 1500);
                } else {
                    setErrors({ submit: "Invalid email or password" });
                }
            })
            .catch((err) => {
                const formattedErrors = {};
                err.inner.forEach((e) => {
                    formattedErrors[e.path] = e.message;
                });

                setErrors(formattedErrors);
            });

    };

    return (
        <div className="flex flex-col justify-center py-10 min-w-[40%] px-8 sm:px-16 lg:px-24 xl:px-32 relative">
            <div className="w-full max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                <p className="text-slate-500 mb-10 text-sm">Log in to your account</p>

                <form onSubmit={handleSubmit}>
                    {/* Email Input */}
                    <div className="relative">
                        <label className="block text-xs font-semibold text-slate-600  uppercase tracking-wider">Email Address</label>
                        <div className="relative flex items-center border-b border-slate-300 focus-within:border-blue-500 transition-colors py-2">
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => {
                                    setData({ ...data, email: e.target.value });
                                }}
                                placeholder="name@company.com"
                                className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400 text-sm"
                                required
                            />
                            <MailOutlineIcon className="text-slate-400 absolute right-0" fontSize="small" />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="relative mt-8">
                        <div className="flex justify-between items-center">
                            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider">Password</label>
                            <Link to="#" className="text-xs font-semibold text-blue-600 hover:text-blue-700">Forgot Password?</Link>
                        </div>
                        <div className="relative flex items-center border-b border-slate-300 focus-within:border-blue-500 transition-colors py-2">
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => {
                                    setData({ ...data, password: e.target.value });
                                }}
                                placeholder="••••••••"
                                className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400 text-sm tracking-widest"
                                required
                            />
                            <LockOutlinedIcon className="text-slate-400 absolute right-0" fontSize="small" />
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                        )}
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center my-8">
                        <input
                            type="checkbox"
                            id="remember"
                            checked={data.rememberMe}
                            onChange={(e) => {
                                setData({ ...data, rememberMe: e.target.checked });
                            }}
                            className="w-4 h-4 cursor-pointer"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-slate-600">
                            Remember this device for 30 days
                        </label>
                    </div>

                    {errors.submit && (
                        <div className='text-center'>
                            <p className="text-red-500 text-xs">{errors.submit}</p>
                        </div>
                    )}
                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-2 cursor-pointer py-3 px-3 text-xl bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-2"
                    >
                        {isLoading ? 'Loading' : 'Sign In'}
                        {/* loading dots */}
                        {isLoading && (
                            <div className="flex gap-1">
                                <div className="w-2 h-2.5 bg-gray-200 rounded-full animate-[bigBounce_1s_infinite]"></div>
                                <div className="w-2 h-2.5 bg-gray-200 rounded-full animate-[bigBounce_1s_infinite] [animation-delay:0.1s]"></div>
                                <div className="w-2 h-2.5 bg-gray-200 rounded-full animate-[bigBounce_1s_infinite] [animation-delay:0.2s]"></div>
                            </div>
                        )}
                    </button>
                </form>
                <p className='text-sm text-blue-400 mt-2 text-center'>Demo: test@TechStore.com , 123456</p>


                {/* Social Login */}
                <div className="mt-10">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative px-4 bg-slate-50 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Or continue with
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button className="flex cursor-pointer items-center justify-center py-2.5 px-4 bg-slate-100/80 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium text-sm">
                            <GoogleIcon fontSize="small" className="mr-2" />
                            Google
                        </button>
                        <button className="flex cursor-pointer items-center justify-center py-2.5 px-4 bg-slate-100/80 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors font-medium text-sm">
                            <AppleIcon fontSize="small" className="mr-2 mb-0.5" />
                            Apple
                        </button>
                    </div>
                </div>

                {/* Sign Up Link */}
                <p className="text-center mt-12 text-sm text-slate-500">
                    Don't have an account? <Link to="#" className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer">Create an account</Link>
                </p>
            </div>
            <style>
                {`
                @keyframes bigBounce {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-3px);
                    }
                }
                `}
            </style>
        </div>
    );
};

export default RightPanel;

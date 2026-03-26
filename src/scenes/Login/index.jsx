import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Login = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-slate-50">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default Login;

import { createContext, useState } from "react";

export const profileActiveContext = createContext({
    isProfileActive: false,
    setIsProfileActive: () => { }
});

export const ProfileActiveProvider = ({ children }) => {
    const [isProfileActive, setIsProfileActive] = useState(false);

    return (
        <profileActiveContext.Provider
            value={{
                isProfileActive,
                setIsProfileActive
            }}
        >
            {children}
        </profileActiveContext.Provider>
    );
};

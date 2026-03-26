// Context for category

import { createContext, useState } from "react";

const categoryContext = createContext({
    cat: "SmartPhones",
    setCat: () => { }
});


export const CategoryProvider = ({ children }) => {
    const [cat, setCat] = useState("SmartPhones");
    return (
        <categoryContext.Provider value={{ cat, setCat }}>
            {children}
        </categoryContext.Provider>
    );
};

export default categoryContext;
// Context for category

import { createContext, useState } from "react";

const categoryContext = createContext({
    cat: "Smartphones",
    setCat: () => { }
});


export const CategoryProvider = ({ children }) => {
    const [cat, setCat] = useState("Smartphones");
    return (
        <categoryContext.Provider value={{ cat, setCat }}>
            {children}
        </categoryContext.Provider>
    );
};

export default categoryContext;
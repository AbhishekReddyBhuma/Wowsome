import react, { createContext, useState } from "react";

const context = createContext();

const contextWrapper = ({children}) => {

    const [loadProducts, setLoadproducts] = useState(false);

    return <context.Provider
    value = {{
        loadProducts
    }}>
        {children}
    </context.Provider>
}
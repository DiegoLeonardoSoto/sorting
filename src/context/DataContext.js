import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const Dataprovider = ({children}) => {

    const [colorSelected, setColorSelected] = useState([0,'rgb(50, 163, 217)']);
    const [rangeContext, setRangeContext] = useState(20);

    return(
        <DataContext.Provider value={{
            colorSelected,
            setColorSelected,
            rangeContext,
            setRangeContext
        }}>
            {children}
        </DataContext.Provider>
    )


};
"use client"

import React, { createContext, useState } from "react";

export const planeContext = createContext({})

const ContextProvider = ({children}:{children: React.ReactNode}) => {

    const [planes, setPlanes] = useState([])
    const [saved, setSaved] = useState([])

    const planeList = {
        planes,
        setPlanes,
        saved,
        setSaved
    }
    return (
        <planeContext.Provider value={planeList}>
            {children}
        </planeContext.Provider>
    );
};

export default ContextProvider;
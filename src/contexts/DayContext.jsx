import React, {createContext, useContext, useState} from "react";

export const DayContext = createContext();

export function DayProvider({children}) {
    const [dia, setDia] = useState(1);
    const dias = [1, 2, 3];

    return (
        <DayContext.Provider value={{dia, setDia, dias}}>
            {children}
        </DayContext.Provider>
    )
}

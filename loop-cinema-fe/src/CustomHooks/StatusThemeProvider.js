import React, { useState, useContext, children } from "react"


const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext();

export function useStatusTheme(){
    return useContext(ThemeContext)
}

export function useStatusThemeUpdate(){
    return useContext(ThemeUpdateContext)
}

export function StatusThemeProvider({children}){
    const [status, setStatus] = useState(false);
    
    function setStatusUpdate(value){
        setStatus(value)
    }

    return(
        <ThemeContext.Provider value={status}>
            <ThemeUpdateContext.Provider value={setStatusUpdate}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}

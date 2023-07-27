import {useState} from "react";
import contextTheme from "./Context";

const ContextProvider = ({children})=>{
    const [theme, setTheme] = useState("Light")
    
    

    return(
        <contextTheme.Provider value={{theme, setTheme}}>
            {children}
        </contextTheme.Provider>
    )
}

export default ContextProvider
import { createContext, useContext } from "react";



export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})

export const ThemeProvider = ThemeContext.Provider


//custom hook to extract ThemeContext with single import, 
//no need to import ThemeContext and useContext directly import below custom hook
export default function useTheme() {
    return useContext(ThemeContext)
}
import { createContext, useState } from "react";


export const themeValue = () => {
    const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark")
    return {}
}


export const ThemeContext = createContext({});
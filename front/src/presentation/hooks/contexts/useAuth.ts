import { createContext, useState } from "react";


export const authValue = () => {
    const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark")
    return {activeTheme, setActiveTheme}
}


export const AuthContext = createContext({});
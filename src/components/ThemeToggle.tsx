import { useState } from "react";
import { Sun, Moon } from "lucide-react";

/* Theme Toggling component to control light and dark mode */
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }   
    return (
        <button onClick={toggleTheme}>{isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
    )
}
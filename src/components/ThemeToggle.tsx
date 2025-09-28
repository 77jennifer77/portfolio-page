import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

/* Theme Toggling component to control light and dark mode */
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        /* Check local storage for theme preference */
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            /* Needs to be opposite of the current dark mode */
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            /* Flip value of isDarkMode */
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }   
    return (
        <button onClick={toggleTheme}>{isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
    )
}
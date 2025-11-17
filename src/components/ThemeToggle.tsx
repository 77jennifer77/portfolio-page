import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cn } from "./../lib/utils";
/* Theme Toggling component to control light and dark mode */
export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        /* Check local storage for theme preference */
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            /* Needs to be opposite of the current dark mode */
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            /* Flip value of isDarkMode */
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }   
    return (
        <button 
            onClick={toggleTheme}
            className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300", 
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
    )
}
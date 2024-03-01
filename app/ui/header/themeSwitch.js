"use client";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const getSavedTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme || "light";
    };

    const [theme, setTheme] = useState(getSavedTheme());
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const initialTheme = storedTheme || "light";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-bs-theme", initialTheme);
    }, []);

    // Handling change of theme
    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function handleClick() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    // console.log(`Current theme ====> ${theme}`);

    return (
        <button
            className="btn d-flex justify-content-center align-items-center p-2"
            onClick={handleClick}
        >
            {theme === "light" ? <BsMoonFill size="2.0em" /> : <BsSun size="2.0em" />}
        </button>
    );
}

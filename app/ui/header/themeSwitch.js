"use client";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";
import styles from './themeSwitch.module.css'

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
            className={`btn border-0 d-flex justify-content-center align-items-center p-0 m-0 me-2 ms-2 ${styles.themeSwitchButton}`}
            onClick={handleClick}
        >
            {theme === "light" ? <BsMoon size="2.0em" /> : <BsSun size="2.0em" />}
        </button>
    );
}

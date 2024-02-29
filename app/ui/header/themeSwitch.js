import { BsSun, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState("light");

    function handleClick() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }, [theme]);

    return (<button
        className="btn d-flex justify-content-center align-items-center p-2"
        onClick={handleClick} // Add the click handler to toggle the theme
    >
        {theme === "light" ? <BsMoonFill size="2.2em" /> : <BsSun size="2.2em"/>}
    </button>);
}

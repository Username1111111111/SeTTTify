import NavMenu from "./navmenu";
import SearchBar from "./searchBar";
import LangSwitch from "./langSwitch";
// import ThemeSwitch from "./themeSwitch";
import Auth from "../auth/auth";
import DynamicThemeSwitch from "@/lib/dynamicThemeSwitch";
// import { useSession } from "next-auth/react";

export default function Header() {
    
    return (
        <header className="row d-flex flex-wrap w-100 m-0 p-0 border border-secondary border-top-0 bg-body-secondary">
            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start p-0">
                <NavMenu />
            </div>
            <div className="col-12 col-md-7 d-flex flex-wrap flex-md-nowrap justify-content-md-end align-items-center justify-content-around">
                <SearchBar />
                {/* <ThemeSwitch /> */}
                <DynamicThemeSwitch />
                <LangSwitch />
                <Auth />
            </div>
        </header>
    );
}

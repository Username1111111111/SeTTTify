import NavMenu from "./navmenu";
import SearchBar from "./searchBar";
import LangSwitch from "./langSwitch";
// import ThemeSwitch from "./themeSwitch";
import Auth from "./auth";
import DynamicThemeSwitch from "@/app/lib/dynamicThemeSwitch";

export default function Header() {
    return (
        <header className="row d-flex flex-wrap w-100 m-0 p-0 border border-secondary border-top-0">
            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start p-0">
                <NavMenu />
            </div>
            <div className="col-12 col-md-7 d-flex flex-wrap justify-content-center justify-content-md-end align-items-center">
                <SearchBar />
                {/* <ThemeSwitch /> */}
                <DynamicThemeSwitch />
                <LangSwitch />
                <Auth />
            </div>
        </header>
    );
}

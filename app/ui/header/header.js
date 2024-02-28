import NavMenu from "./navmenu";
import SearchBar from "./searchBar";
import LangSwitch from "./langSwitch";
import ThemeSwitch from "./themeSwitch";
import Auth from "./auth";

export default function Header() {
    return (
        <header className="w-100 m-0 p-0">
            <div className="row flex-wrap">
                <div className="col-12 col-md-6 d-flex justify-content-start">
                    <NavMenu />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end justify-content-around">
                    <SearchBar />
                    <ThemeSwitch />
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-md-center justify-content-center justify-content-md-between">
                    <LangSwitch />
                    <Auth />
                </div>
            </div>
        </header>
    );
}

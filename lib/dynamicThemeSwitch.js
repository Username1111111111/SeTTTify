import dynamic from "next/dynamic";

const DynamicThemeSwitch = dynamic(() => import("../ui/header/themeSwitch"), {
    ssr: false,
    loading: () => (
        <button className="btn d-flex justify-content-center align-items-center p-2">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </button>
    ),
});

export default DynamicThemeSwitch;

import dynamic from "next/dynamic";

const DynamicThemeSwitch = dynamic(() => import("../ui/header/themeSwitch"), {
    ssr: false,
});

export default DynamicThemeSwitch;

// "use client";
import { BsTranslate } from "react-icons/bs";
// import { useCookies } from "react-cookie";
// import { useRouter } from "next/navigation";

export default function LangSwitch() {
    // const [_, setCookie] = useCookies(["NEXT_LOCALE"]);
    // const router = useRouter();

    // const handleLanguageChange = (locale) => {
    //     setCookie("NEXT_LOCALE", locale, { path: "/" });
    //     router.reload();
    // };

    return (
        <div className={`p-0`}>
            <button
                className={`btn border-0 p-0`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <BsTranslate size="2.0em" />
            </button>
            <ul className="dropdown-menu">
                {/* <li onClick={handleLanguageChange("ge")}> */}
                <li>
                    <a className="dropdown-item" href="">
                        Georgian
                    </a>
                </li>
                {/* <li onClick={handleLanguageChange("en")}> */}
                <li>
                    <a className="dropdown-item" href="">
                        English
                    </a>
                </li>
            </ul>
        </div>
    );
}

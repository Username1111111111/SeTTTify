"use client";
import { BsTranslate } from "react-icons/bs";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function LangSwitch() {
    const [_, setCookie] = useCookies(["NEXT_LOCALE"]);
    const router = useRouter();

    const handleLanguageChange = (locale) => {
        setCookie("NEXT_LOCALE", locale, {
            path: "/",
            maxAge: 60 * 60 * 24 * 365,
            sameSite: "lax",
        });
        router.refresh();
    };

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
                <li
                    onClick={() => handleLanguageChange("ge")}
                    className="dropdown-item"
                >
                    ქართული
                </li>
                <li
                    onClick={() => handleLanguageChange("en")}
                    className="dropdown-item"
                >
                    English
                </li>
            </ul>
        </div>
    );
}

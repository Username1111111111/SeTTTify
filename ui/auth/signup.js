'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Signup() {
    const t = useTranslations("Header");

    const router = useRouter();

    function handleClick() {
        router.push('/signup');
    }

    return (<button className="btn btn-primary m-1" onClick={handleClick}>{`${t("signup")}`}</button>);
}
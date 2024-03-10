'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Login() {
    const t = useTranslations("Header");

    const router = useRouter();

    function handleClick() {
        router.push('/api/auth/signin');
    }


    return (<button className="btn btn-secondary m-1" onClick={handleClick}>{`${t("login")}`}</button>);
}
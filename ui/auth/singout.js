'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";


export default function Signout() {
    const t = useTranslations("Header");

    const router = useRouter();

    function handleClick() {
            signOut();
            router.push('/')
    }

    return (<button className="btn btn-secondary text-nowrap m-1" onClick={handleClick}>{`${t("signout")}`}</button>);
}
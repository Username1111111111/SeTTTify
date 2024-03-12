'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CreateCollectionButton() {
    const t = useTranslations("Sidebarplus");
    const router = useRouter();

    function handleClick() {
        router.push('/collection/create');
    }

    
    return (<button className="btn btn-primary m-2 p-1 row text-nowrap" onClick={handleClick}>{t('create_collection')}</button>);
}
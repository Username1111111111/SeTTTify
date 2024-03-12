'use client'
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CreateItemButton() {
    const router = useRouter();
    const t = useTranslations("Item");

    function handleClick() {
        router.push('/item/create');
    }

    return (
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100 p-1">
            <button className="btn btn-success m-2 p-1 row text-nowrap" onClick={handleClick}>
                {t('create_item')}
            </button>
        </div>
    );
}

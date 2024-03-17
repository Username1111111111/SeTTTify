"use client"
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function CancelButton() {
    const router = useRouter();
    const t = useTranslations("Sidebarplus");

    const handleCancel = () => {
        router.back();
    };

    return (
        <button
            type="button"
            className="btn btn-secondary text-nowrap m-0 ms-3"
            title={t("cancel")} 
            onClick={handleCancel}
        >
            {t("cancel")} <GiCancel size="1.5em" />
        </button>
    );
}

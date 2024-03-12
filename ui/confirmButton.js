import { FaCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function ConfirmButton() {
    const t = useTranslations("Sidebarplus");
    
    return (
        <button type="button" className="btn btn-primary text-nowrap m-0 me-3" title={t('confirm')}>
            {t('confirm')} <FaCheck size="1.4em" />
        </button>
    );
}

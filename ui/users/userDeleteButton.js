import { useTranslations } from "next-intl"

export default function UserDeleteButton({onClick}) {
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-danger m-2" onClick={onClick}>{t("delete")} 🗑️</button>)
}
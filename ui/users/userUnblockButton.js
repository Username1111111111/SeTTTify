import { useTranslations } from "next-intl"

export default function UserUnblockButton({onClick}) {
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-secondary m-2" onClick={onClick}>{t("unblock")} 🔓</button>)
}
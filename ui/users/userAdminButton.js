import { useTranslations } from "next-intl"

export default function UserAdminButton({onClick}) {4
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-success m-2" onClick={onClick}>{t("toggle_admin")} 👑</button>)
}
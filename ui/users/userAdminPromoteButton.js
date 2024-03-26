import { useTranslations } from "next-intl"

export default function UserAdminPromoteButton({onClick}) {4
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-success m-2" onClick={onClick}>{t("to_admin")} 👑</button>)
}
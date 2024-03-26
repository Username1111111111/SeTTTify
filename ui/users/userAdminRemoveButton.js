import { useTranslations } from "next-intl"

export default function UserAdminRemoveButton({onClick}) {4
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-success bg-info m-2" onClick={onClick}>{t("de_admin")} 🪓</button>)
}
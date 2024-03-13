import { useTranslations } from "next-intl"

export default function UserBlockButton({onClick}) {
    const t = useTranslations("Users");
    return (<button type="button" className="btn btn-primary m-2" onClick={onClick}>{t("block")} 🔒</button>)
}
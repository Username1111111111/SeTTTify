import { useTranslations } from "next-intl";

export default function TaglistField({ value }) {
    const t = useTranslations("Item");
    return (
        <tr className="">
            <td className="bg-body-secondary">{t("tags")}:</td>
            <td className="bg-body-secondary">{ value }</td>
        </tr>
    );
}

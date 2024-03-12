import { useTranslations } from "next-intl";

export default function ItemNameField({ value }) {
    const t = useTranslations("Item");
    return (
        <tr>
            <td className="bg-body-secondary">{t('name')}: </td>
            <td className="bg-body-secondary">{ value }</td>
        </tr>
    );
}

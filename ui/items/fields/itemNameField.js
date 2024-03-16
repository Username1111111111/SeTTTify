import { useTranslations } from "next-intl";

export default function ItemNameField({ itemName }) {
    const t = useTranslations("Item");
    return (
        <tr>
            <td className="bg-body-secondary">{t('name')}: </td>
            <td className="bg-body-secondary">{ itemName }</td>
        </tr>
    );
}

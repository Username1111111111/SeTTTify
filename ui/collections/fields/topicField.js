import { useTranslations } from "next-intl";

export default function TopicField({collectionTopic}) {
    const t = useTranslations("Topic");

    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex justify-content-start align-items-center">
            <div className="text-center  border border-secondary rounded bg-body">{t(collectionTopic)}</div>
        </li>
    );
}

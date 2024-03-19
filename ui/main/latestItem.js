import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LatestItem({ name, collection, author, itemId }) {
    const t = useTranslations('Home')

    return (
        <Link href={`/item/${itemId}`} className="text-decoration-none">
            <li className="col-12 border border-secondary rounded m-0 p-1 px-2 mb-1 mt-1 bg-body">
                <p className="p-0 m-0">
                    <u>{name}</u> {t("from")} <u>{collection}</u> {t("by")} <u>{author}</u>
                </p>
            </li>
        </Link>
    );
}

// list of latest items (name, collection, author)

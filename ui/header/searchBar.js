import styles from "./searchBar.module.css";
import { useTranslations } from "next-intl";

export default function SearchBar() {
    const t = useTranslations("Header");
    return (
        <input
            id={`searchBar`}
            type="text"
            className={`form-control border text-nowrap border-secondary ${styles.srch}`}
            placeholder={`🔍 ${t("search")}...`}
        />
    );
}

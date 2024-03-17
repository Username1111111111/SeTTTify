import UserTableCheckbox from "./userTableCheckbox";
import { useState } from "react";
import { useTranslations } from "next-intl"

export default function UserTableHead({ selectAllRows, deselectAllRows }) {
    const [checked, setCheckbox] = useState(false);
    const t = useTranslations("Users");

    function handleChange() {
        if (!checked) {
            selectAllRows();
        } else {
            deselectAllRows();
        }
        setCheckbox((checked) => !checked);
    }

    return (
        <thead className="rounded">
            <tr className="rounded">
                <th scope="col" className="m-0 p-1 text-center rounded">
                    <UserTableCheckbox
                        checked={checked}
                        onChange={handleChange}
                    >All</UserTableCheckbox>
                </th>
                <th scope="col" className="m-0 p-1 text-center">ID</th>
                <th scope="col" className="m-0 p-1 text-center">{t("name")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("email")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("signup_date")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("last_login")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("blocked")}</th>
                <th scope="col" className="m-0 p-1 text-center rounded">{t("admin")}</th>
            </tr>
        </thead>
    );
}

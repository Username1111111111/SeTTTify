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
                    ></UserTableCheckbox>
                </th>
                <th scope="col" className="m-0 p-1 text-center">ID</th>
                <th scope="col" className="m-0 p-1 text-center">{t("name")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("email")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("signup_date")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("last_login")}</th>
                <th scope="col" className="m-0 p-1 text-center">{t("blocked")}</th>
                <th scope="col" className="m-0 p-1 text-center rounded">{t("admin")}</th>
                {/* <th scope="col">Personal page</th>
                <th scope="col">Language</th>
                <th scope="col">Collections</th>
                <th scope="col">Items</th>
                <th scope="col">Comments</th>
                <th scope="col">Likes</th> */}
            </tr>
        </thead>
    );
}

// user: {
//     id: "string",
//     name: "string",
//     email: "string",
//     password: "string",
//     signup_date: "date",
//     last_login_date: "date",
//     authenticated: "boolean",
//     blocked: "boolean",
//     admin: "boolean",
//     personal_page: "string",
//     language: "string",
//     collections: ["collectionId1", "collectionId2", "collectionId3"],
//     items: ["itemId1", "itemId2", "itemId3"],
//     comments: ["commentId1", "commentId2", "commentId3"],
//     likes: ["likeId1", "likeId2", "likeId3"]
// },

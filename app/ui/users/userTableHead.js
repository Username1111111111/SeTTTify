import UserTableCheckbox from "./userTableCheckbox";
import { useState } from "react";

export default function UserTableHead({ selectAllRows, deselectAllRows }) {
    const [checked, setCheckbox] = useState(false);

    function handleChange() {
        if (!checked) {
            selectAllRows();
        } else {
            deselectAllRows();
        }
        setCheckbox((checked) => !checked);
    }

    return (
        <thead>
            <tr>
                <th scope="col">
                    <UserTableCheckbox
                        checked={checked}
                        onChange={handleChange}
                    ></UserTableCheckbox>
                </th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Signup date</th>
                <th scope="col">Last login</th>
                <th scope="col">Blocked</th>
                <th scope="col">Admin</th>
                <th scope="col">Personal page</th>
                <th scope="col">Language</th>
                <th scope="col">Collections</th>
                <th scope="col">Items</th>
                <th scope="col">Comments</th>
                <th scope="col">Likes</th>
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

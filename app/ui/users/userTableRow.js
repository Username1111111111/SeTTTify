'use client';
import { useState } from "react";
import UserTableCheckbox from "./userTableCheckbox";


export default function UserTableRow({
    id,
    name,
    email,
    signup_date,
    last_login_date,
    blocked,
    admin,
    personal_page,
    language,
    collections,
    items,
    comments,
    likes,    
    selectRow,
    deselectRow,
    selectedRows
}) {
    const [checked, setCheckbox] = useState(false);

    function handleChange(userID) {
        if (selectedRows.includes(userID)) {
            deselectRow(userID);
            setCheckbox(checked => !checked);
        } else {
            selectRow(userID);
            setCheckbox(checked => !checked);
        }
    }

    return (
        <tr>
            <td scope="row">
                <UserTableCheckbox checked={selectedRows.includes(id)} onChange={() => handleChange(id)}></UserTableCheckbox>
            </td>
            <td scope="col">{id}</td>
            <td scope="col">{name}</td>
            <td scope="col">{email}</td>
            <td scope="col">{signup_date}</td>
            <td scope="col">{last_login_date}</td>
            <td scope="col">{blocked}</td>
            <td scope="col">{admin}</td>
            <td scope="col">{personal_page}</td>
            <td scope="col">{language}</td>
            <td scope="col">{collections}</td>
            <td scope="col">{items}</td>
            <td scope="col">{comments}</td>
            <td scope="col">{likes}</td>
        </tr>
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
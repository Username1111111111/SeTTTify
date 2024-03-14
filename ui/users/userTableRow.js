"use client";
import { useState } from "react";
import UserTableCheckbox from "./userTableCheckbox";
import Link from "next/link";

export default function UserTableRow({
    id,
    name,
    email,
    signupDate,
    lastLoginDate,
    blocked,
    admin,
    selectRow,
    deselectRow,
    selectedRows,
}) {
    const [checked, setCheckbox] = useState(false);

    function handleChange(userID) {
        if (selectedRows.includes(userID)) {
            deselectRow(userID);
            setCheckbox((checked) => !checked);
        } else {
            selectRow(userID);
            setCheckbox((checked) => !checked);
        }
    }

    function formatDate(serverDate) {
        const date = new Date(serverDate);

        const day = date.getUTCDate().toString().padStart(2, "0"); 
        const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
        const year = date.getUTCFullYear();

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate
    }

    const formattedDate = formatDate(signupDate);

    return (
        <tr>
            <td scope="col" className="m-0 p-1 text-center">
                <UserTableCheckbox
                    checked={selectedRows.includes(id)}
                    onChange={() => handleChange(id)}
                ></UserTableCheckbox>
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                <Link href={`/user/${id}`}>{id}</Link>
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {name}
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {email}
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {formattedDate}
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {lastLoginDate + ""}
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {blocked + ""}
            </td>
            <td scope="col" className="m-0 p-1 text-center">
                {admin + ""}
            </td>
        </tr>
    );
}

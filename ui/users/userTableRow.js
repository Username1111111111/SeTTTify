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
            <td scope="col" className="m-0 p-1 text-center d-flex align-items-center justify-content-center">
                <UserTableCheckbox
                    checked={selectedRows.includes(id)}
                    onChange={() => handleChange(id)}
                ></UserTableCheckbox>
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                <Link href={`/user/${id}`}>{id.slice(28)}</Link>
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {name}
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {email}
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {formattedDate}
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {lastLoginDate + ""}
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {blocked + ""}
            </td>
            <td scope="col" className="m-0 p-1 text-center text-break">
                {admin + ""}
            </td>
        </tr>
    );
}

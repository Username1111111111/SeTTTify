"use client";
import { useState, useEffect } from "react";
// import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import UserTableHead from "./userTableHead";
import UserTableBody from "./userTableBody";
import UserBlockButton from "./userBlockButton";
import UserDeleteButton from "./userDeleteButton";
import UserUnblockButton from "./userUnblockButton";
import UserAdminButton from "./userAdminButton";
import getDomain from "@/lib/getDomain";

export default function Table() {
    // const { data: session, status } = useSession();
    const [users, setUsers] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    // const [currentUserId, setCurrentUserId] = useState(session?.user?._id);
    const domain = getDomain();

    useEffect(() => {
        async function fetchUsers() {
            const res = await fetch(`${domain}/api/users`, {
                next: { revalidate: 60 },
            });
            const data = await res.json();
            setUsers(data);
        }
        fetchUsers();
    });

    // const isLoadingSession = status === "loading";
    // // const isLoadingSession = currentUserId === undefined;

    // if (isLoadingSession) {
    //     return (
    //         <div class="d-flex justify-content-center">
    //             <div class="spinner-border" role="status">
    //                 <span class="sr-only"></span>
    //             </div>
    //         </div>
    //     );
    // }

    // console.log(`currentUserId: -----> ${currentUserId}`);

    // useEffect(() => {
    //     if(session) {
    //         setCurrentUserId(session?.user?._id);
    //     }
    //     if (!session) {
    //         signOutAndRedirect();
    //     }
    // }, [session, currentUserId]);

    async function __deleteData(selectedRows) {
        const req = new Request(`${domain}/api/deleteData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(selectedRows),
        });
        await fetch(req);
    }

    async function __updateData(selectedRows, newStatus) {
        const requestBody = {
            ids: selectedRows,
            newStatus,
        };

        const req = new Request(`${domain}/api/updateData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
        await fetch(req);
    }

    function signOutAndRedirect() {
        // signOut({ callbackUrl: `${domain}/api/auth/signin`, redirect: false });
        signOut();
        redirect(`${domain}/api/auth/signin`);
    }

    async function onToggleBlockButton() {
        if (selectedRows.length > 0) {
            const newStatus = "blocked";
            if (selectedRows.includes(currentUserId)) {
                await __updateData(selectedRows, newStatus);
                signOutAndRedirect();
            } else {
                await __updateData(selectedRows, newStatus);
                refreshUsers();
            }
        } else {
            console.log("No rows selected for deletion");
        }
    }

    async function onToggleUnblockButton() {
        if (selectedRows.length > 0) {
            const newStatus = "active";
            if (session) {
                await __updateData(selectedRows, newStatus);
                refreshUsers();
            } else if (!session) {
                signOutAndRedirect();
            }
        } else {
            console.log("No rows selected for deletion");
        }
    }

    async function onToggleDeleteButton() {
        if (selectedRows.length > 0) {
            if (selectedRows.includes(currentUserId)) {
                await __deleteData(selectedRows);
                signOutAndRedirect();
            } else {
                await __deleteData(selectedRows);
                refreshUsers();
            }
        } else {
            console.log("No rows selected for deletion");
        }
    }

    async function onToggleAdminButton() {
        if (selectedRows.length > 0) {
            if (selectedRows.includes(currentUserId)) {
                // await __deleteData(selectedRows);
                // signOutAndRedirect();
            } else {
                // await __deleteData(selectedRows);
                // refreshUsers();
            }
        } else {
            console.log("No rows selected for deletion");
        }
    }

    function selectAllRows() {
        const allRowIDs = users.map((user) => user.id);
        setSelectedRows(allRowIDs);
    }

    function deselectAllRows() {
        const allRowIDs = [];
        setSelectedRows(allRowIDs);
    }

    function selectRow(rowID) {
        setSelectedRows((selectedRows) => [...selectedRows, rowID]);
    }

    function deselectRow(rowID) {
        setSelectedRows((selectedRows) =>
            selectedRows.filter((id) => id !== rowID)
        );
    }

    return (
        <div className="d-flex flex-column justify-content-center w-100 p-0 p-md-2 m-0">
            <div className="d-flex justify-content-center align-items-center w-100 p-0 m-0 flex-wrap">
                <UserBlockButton
                    selectedRows={selectedRows}
                    onClick={onToggleBlockButton}
                />
                <UserUnblockButton
                    selectedRows={selectedRows}
                    onClick={onToggleUnblockButton}
                />
                <UserDeleteButton
                    selectedRows={selectedRows}
                    onClick={onToggleDeleteButton}
                />
                <UserAdminButton
                    selectedRows={selectedRows}
                    onClick={onToggleAdminButton}
                />
            </div>
            <div className="border border-secondary rounded p-0 m-0 bg-body d-flex justify-content-center align-items-center table-responsive">
                <table className="table table-striped rounded">
                    <UserTableHead
                        selectedRows={selectedRows}
                        deselectAllRows={deselectAllRows}
                        selectAllRows={selectAllRows}
                    ></UserTableHead>
                    <UserTableBody
                        selectedRows={selectedRows}
                        selectRow={selectRow}
                        deselectRow={deselectRow}
                        users={users}
                    ></UserTableBody>
                </table>
            </div>
        </div>
    );
}

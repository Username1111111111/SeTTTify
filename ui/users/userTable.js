"use client";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserTableHead from "./userTableHead";
import UserTableBody from "./userTableBody";
import UserBlockButton from "./userBlockButton";
import UserDeleteButton from "./userDeleteButton";
import UserUnblockButton from "./userUnblockButton";
import UserAdminPromoteButton from "./userAdminPromoteButton";
import UserAdminRemoveButton from "./userAdminRemoveButton";
import getDomain from "@/lib/getDomain";
import usersBlock from "@/lib/usersBlock";
import usersUnblock from "@/lib/usersUnblock";
import usersToAdmin from "@/lib/usersToAdmin";
import usersDeadmin from "@/lib/usersDeadmin";
import usersDelete from "@/lib/usersDelete";
import Spinner from "@/ui/spinner";

export default function Table() {
    const { data: session } = useSession();
    const [users, setUsers] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentUserId, setCurrentUserId] = useState(session?.user?.id);
    const [loading, setLoading] = useState(true);
    const domain = getDomain();
    const router = useRouter();

    async function fetchUsers() {
        const res = await fetch(`${domain}/api/users`, {
            // next: { revalidate: 60 },
        });
        const data = await res.json();
        setUsers(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchUsers();
    });


    useEffect(() => {
        if (!session || (session && !session.user.admin)) {
            router.push(`${domain}/`);
        }
    }, [session, domain, router]);

    async function signOutAndRedirect() {
        await signOut();
        router.push(`${domain}/`);
    }

    async function onToggleBlockButton() {
        if (selectedRows.length > 0) {
            if (session) {
                if (selectedRows.includes(currentUserId)) {
                    await usersBlock(selectedRows);
                    signOutAndRedirect();
                } else {
                    await usersBlock(selectedRows);
                    await fetchUsers();
                }
            }
        } else {
            console.log("No rows selected for blocking");
        }
    }

    async function onToggleUnblockButton() {
        if (selectedRows.length > 0) {
            if (session) {
                await usersUnblock(selectedRows);
                await fetchUsers();
            }
        } else {
            console.log("No rows selected for unblocking");
        }
    }

    async function onToggleAdminButton() {
        if (selectedRows.length > 0) {
            if (session) {
                await usersToAdmin(selectedRows);
                await fetchUsers();
            }
        } else {
            console.log("No rows selected for unblocking");
        }
    }

    async function onToggleDeAdminButton() {
        if (selectedRows.length > 0) {
            if (session) {
                if (selectedRows.includes(currentUserId)) {
                    await usersDeadmin(selectedRows);
                    signOutAndRedirect();
                } else {
                    await usersDeadmin(selectedRows);
                    await fetchUsers();
                }
            }
        } else {
            console.log("No rows selected for unblocking");
        }
    }

    async function onToggleDeleteButton() {
        if (selectedRows.length > 0) {
            if (selectedRows.includes(currentUserId)) {
                await usersDelete(selectedRows);
                signOutAndRedirect();
            } else {
                await usersDelete(selectedRows);
                await fetchUsers();
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
        <div className="d-flex flex-column justify-content-center w-100 p-0 p-md-2 pt-2 m-0">
            <div className="d-flex justify-content-center align-items-center w-100 p-0 m-0 mb-2 flex-wrap border border-secondary bg-body-secondary rounded">
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
                <UserAdminPromoteButton
                    selectedRows={selectedRows}
                    onClick={onToggleAdminButton}
                />
                <UserAdminRemoveButton
                    selectedRows={selectedRows}
                    onClick={onToggleDeAdminButton}
                />
            </div>
            <div className="border border-secondary rounded p-0 m-0 bg-body d-flex justify-content-center align-items-center table-responsive">
                {loading ? (
                    <Spinner />
                ) : (
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
                )}
            </div>
        </div>
    );
}

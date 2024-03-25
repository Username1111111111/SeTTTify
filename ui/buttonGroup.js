"use client";
import EditButton from "./editButton";
import DeleteButton from "./deleteButton";
import { useSession } from "next-auth/react";

export default function ButtonGroup({ id, idType, userId }) {
    const { data: session } = useSession();

    return (
        <div className="d-flex justify-content-end align-items-center p-0 m-0 me-1">
            {session?.user?.admin || session?.user?.id == userId ? (
                <>
                    <EditButton id={id} idType={idType} />
                    <DeleteButton id={id} idType={idType} />
                </>
            ) : null}
        </div>
    );
}

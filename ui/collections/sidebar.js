"use client";
import CollectionList from "./collectionList";
import CreateCollectionButton from "./createCollectionButton";
import { useSession } from "next-auth/react";

export default function Sidebar({ userId }) {
    const { data: session } = useSession();
    

    return (
        <div className="p-2 p-md-0 m-0 mt-2 col-12 col-md-3 ">
            <div className=" p-0 m-0 d-flex flex-column align-items-center border border-secondary bg-body-secondary rounded">
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100 p-0 mt-2">
                    {(session && session?.user?.id == userId) ||
                    (session && session?.user?.admin) ? (
                        <CreateCollectionButton userId={userId} />
                    ) : null}
                </div>
                <CollectionList userId={userId} />
            </div>
        </div>
    );
}

'use client';
import Sidebar from "@/ui/collections/sidebar";
import getUserByCollectionId from "@/lib/getUserByCollectionId";
import { useEffect, useState } from "react";
import ItemCardEdit from "@/ui/items/itemCardEdit";

export default function ItemCreatePage({ params }) {
    const [userId, setUserId] = useState();
    const collectionId = params.collectionId;
    const mode = "create";

    // To be made: fetch session userId
    // let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';
    
    useEffect(() => {
        async function getUser(id) {
            const userId = await getUserByCollectionId(id);
            setUserId(userId);
        }
        getUser(collectionId);
    }, [collectionId]);

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 m-0 p-0 d-flex justify-content-center">
                <ItemCardEdit userId={userId} mode={mode}/>
            </div>
        </>
    );
}

"use client";
import Sidebar from "@/ui/collections/sidebar";
import getUserByCollectionId from "@/lib/getUserByCollectionId";
import { useEffect, useState } from "react";
import ItemCardEdit from "@/ui/items/itemCardEdit";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ItemCreatePage({ params }) {
    const [userId, setUserId] = useState();
    const collectionId = params.collectionId;
    const mode = "create";
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        async function getUser(id) {
            const userId = await getUserByCollectionId(id);
            setUserId(userId);
        }
        getUser(collectionId);
        if (
            (!session && session?.user?.id !== userId) ||
            (!session && !session?.user?.admin)
        ) {
            router.back();
        }
    }, [collectionId]);

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 m-0 p-0 d-flex justify-content-center">
                {(session && session?.user?.id == userId) ||
                (session && session?.user?.admin) ? (
                    <ItemCardEdit
                        collectionId={collectionId}
                        mode={mode}
                        userId={userId}
                    />
                ) : null}
            </div>
        </>
    );
}

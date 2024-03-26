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
        if (
            (!session && session?.user?.id !== userId) ||
            (!session && !session?.user?.admin)
        ) {
            router.back();
        } else {
            getUser();
        }
        async function getUser() {
            const userId = await getUserByCollectionId(collectionId);
            setUserId(userId);
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
                ) : <div></div>}
            </div>
        </>
    );
}

"use client";
import DeletePage from "@/ui/deletePage";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import getUserByCollectionId from "@/lib/getUserByCollectionId";

export default function CollectionPage({ params }) {
    const [userId, setUserId] = useState();
    const [collectionId, setcollectionId] = useState(params.collectionId);
    const idType = "collection";
    const { data: session } = useSession();
    const router = useRouter();

    if (
        (!session && session?.user?.id !== userId) ||
        (!session && !session?.user?.admin)
    ) {
        router.back();
    }

    useEffect(() => {
        async function getUser() {
            const userId = await getUserByCollectionId(collectionId);
            setUserId(userId);
        }
        getUser();
    }, [collectionId]);

    return (
        <>
            {(session && session?.user?.id == userId) ||
            (session && session?.user?.admin) ? (
                <DeletePage id={collectionId} idType={idType} userId={userId} />
            ) : null}
        </>
    );
}

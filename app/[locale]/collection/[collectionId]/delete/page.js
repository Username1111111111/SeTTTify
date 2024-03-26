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
            {(session && session?.user?.id == userId) ||
            (session && session?.user?.admin) ? (
                <DeletePage id={collectionId} idType={idType} userId={userId} />
            ) : <div></div>}
        </>
    );
}

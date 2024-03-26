"use client";
import CollectionEdit from "@/ui/collections/collectionEdit";
import getUserByCollectionId from "@/lib/getUserByCollectionId";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function CollectionPage({ params }) {
    const mode = "edit";
    const collectionId = params.collectionId;
    const [userId, setUserId] = useState();
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
                <CollectionEdit
                    collectionId={params.collectionId}
                    mode={mode}
                    userId={userId}
                />
            ) : <div></div>}
        </>
    );
}

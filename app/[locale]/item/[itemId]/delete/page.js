"use client";
import DeletePage from "@/ui/deletePage";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import getUserByItemId from "@/lib/getUserByItemId";
import { useEffect, useState } from "react";

export default function ItemPage({ params }) {
    const itemId = params.itemId;
    const idType = "item";
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
            const userId = await getUserByItemId(itemId);
            setUserId(userId);
        }
    }, [itemId]);

    return (
        <>
            {(session && session?.user?.id == userId) ||
            (session && session?.user?.admin) ? (
                <DeletePage id={itemId} idType={idType} userId={userId} />
            ) : (
                <div></div>
            )}
        </>
    );
}

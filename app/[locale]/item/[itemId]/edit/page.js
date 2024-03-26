"use client";
import ItemCardEdit from "@/ui/items/itemCardEdit";
import getUserByItemId from "@/lib/getUserByItemId";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function ItemEditPage({ params }) {
    const itemId = params.itemId;
    const mode = "edit";
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
                <ItemCardEdit itemId={itemId} mode={mode} userId={userId}/>
            ) : (
                <div></div>
            )}
        </>
    );
}

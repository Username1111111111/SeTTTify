"use client";
import DeletePage from "@/ui/deletePage";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import getUserByItemId from "@/lib/getUserByItemId";
import { useEffect, useState } from "react";

export default function ItemPage({ params }) {
    const itemId = params.itemId;
    const [userId, setUserId] = useState();
    const idType = "item";
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        async function getUser() {
            const userId = await getUserByItemId(itemId);
            setUserId(userId);
        }
        getUser();
    }, [itemId]);

    if (
        (!session && session?.user?.id !== userId) ||
        (!session && !session?.user?.admin)
    ) {
        router.back();
    }

    return <DeletePage id={itemId} idType={idType} userId={userId}/>
    
}
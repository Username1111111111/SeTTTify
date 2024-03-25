"use client";
import Sidebar from "@/ui/collections/sidebar";
import CollectionEdit from "@/ui/collections/collectionEdit";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function CollectionCreatePage({ params }) {
    const userId = params.userId;
    const mode = "create";
    const { data: session } = useSession();
    const router = useRouter();

    if (
        (!session && session?.user?.id !== userId) ||
        (!session && !session?.user?.admin)
    ) {
        router.back();
    }

    return (
        <>
            <Sidebar userId={userId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {(session && session?.user?.id == userId) ||
                (session && session?.user?.admin) ? (
                    <CollectionEdit userId={userId} mode={mode} />
                ) : null}
            </div>
        </>
    );
}

"use client";
import Sidebar from "@/ui/collections/sidebar";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function CollectionsLayout({ children }) {
    const { data: session, status } = useSession();
    const router = useRouter();

    const currentSessionUserId = session?.user?.id;

    if (!session) {
        router.back();
    }

    return (
        <>
            <Sidebar userId={currentSessionUserId} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">
                {children}
            </div>
        </>
    );
}

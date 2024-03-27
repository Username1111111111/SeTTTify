"use client";
import EditButtonGroup from "./editButtonGroup";
import { useTranslations } from "next-intl";
import deleteItem from "@/lib/deleteItem";
import deleteCollection from "@/lib/deleteCollection";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function DeletePage({ id, idType, userId }) {
    const t = useTranslations("Sidebarplus");
    const { data: session } = useSession();
    const router = useRouter();

    if (
        (!session && session?.user?.id !== userId) ||
        (!session && !session?.user?.admin)
    ) {
        router.back();
    }

    async function handleDelete() {
        if (idType == "item") {
            const res = await deleteItem(id);
            
            if (res.status === 200) {
                router.back();
            }
        } else if (idType == "collection") {
            const res = await deleteCollection(id);

            if (res.status === 200) {
                router.back();
            }
        }
    }

    return (
        <div className="row w-100 m-0 d-flex flex-column justify-content-start align-items-center p-2">
            {(session && session?.user?.id == userId) ||
            (session && session?.user?.admin) ? (
                <div className="col-12 col-md-6 border border-secondary rounded p-1 bg-body-secondary p-2">
                    <div className="text-center mb-1">
                        {t("are_you_sure")} {t(idType)} <br></br>
                        <u>{id}</u>?
                    </div>
                    <div className="d-flex flex-row text-center justify-content-center align-items-center">
                        <EditButtonGroup onConfirm={handleDelete} />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

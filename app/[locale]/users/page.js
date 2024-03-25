"use client";
import UserTable from "@/ui/users/userTable";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Users() {
    const { data: session } = useSession();
    const router = useRouter();

    if (!session?.user?.admin) {
        router.back();
    }

    return <>{!session?.user?.admin ? null : <UserTable currentUser={session?.user?.id}/>}</>;
}

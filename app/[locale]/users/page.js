"use client";
import UserTable from "@/ui/users/userTable";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import getDomain from "@/lib/getDomain";

export default function Users() {
    const { data: session } = useSession();
    const router = useRouter();
    const domain = getDomain();

    if (!session || !session?.user?.admin) {
        router.push(`${domain}/`);
    }

    return <>{session && session?.user?.admin ? <UserTable currentUser={session?.user?.id}/> : <div></div>}</>;
}

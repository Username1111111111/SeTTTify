"use client";
import SignupForm from "@/ui/auth/signupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import getDomain from "@/lib/getDomain";

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();
    const domain = getDomain();
    
    if (session) {
        router.push(`${domain}/`);
    }

    return <>{!session ? <SignupForm /> : <div></div>}</>
}

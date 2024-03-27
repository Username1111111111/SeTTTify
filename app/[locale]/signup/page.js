"use client";
import SignupForm from "@/ui/auth/signupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.back();
    }

    return <>{!session ? <SignupForm /> : <div></div>}</>
}

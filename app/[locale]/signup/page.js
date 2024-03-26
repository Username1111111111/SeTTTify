import SignupForm from "@/ui/auth/signupForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session || !session?.user?.admin) {
        router.back();
    }

    return <>{session ? <div></div>: <SignupForm />}</>
}

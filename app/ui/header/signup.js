'use client'
import { useRouter } from "next/navigation";

export default function Signup() {

    const router = useRouter();

    function handleClick() {
        router.push('/signup');
    }

    return (<button className="btn btn-primary m-1" onClick={handleClick}>Sign up</button>);
}
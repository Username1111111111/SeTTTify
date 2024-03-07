'use client'
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    function handleClick() {
        router.push('/login');
    }


    return (<button className="btn btn-secondary m-1" onClick={handleClick}>Login</button>);
}
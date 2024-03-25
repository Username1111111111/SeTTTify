"use client"
import Login from "./login";
import Signup from "./signup";
import UserProfile from "./userProfile";
import Signout from "./singout";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Auth() {
    const { data: session } = useSession();

    useEffect(() => {
    }, [session])

    return (
        <div className="d-flex flex-row m-1">
            {session ? <UserProfile name={session?.user?.name}/> : <Login />}
            {session ? <Signout/> : <Signup/>}
        </div>
    );
}

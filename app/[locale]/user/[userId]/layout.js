"use client"
import Sidebar from "@/ui/collections/sidebar";
import { useParams } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";

export default function UserLayout({ children, userId }) {
    const [id, setId] = useState(userId);
    const params = useParams();

    useEffect( () => {
        if (!userId || userId === undefined) {
            setId(params.userId);
        } 
    }, [params.userId, userId]);
    
    
    return (
        <>
            <Sidebar userId={id} />
            <div className="col-12 col-md-9 p-0 m-0 d-flex justify-content-center">{children}</div>
        </>
    );
}

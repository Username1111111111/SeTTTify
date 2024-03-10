'use client'
import { useRouter } from "next/navigation";

export default function CreateCollectionButton() {

    const router = useRouter();

    function handleClick() {
        router.push('/collection/create');
    }

    
    return (<button className="btn btn-primary m-2 p-1 row text-nowrap" onClick={handleClick}>Create collection</button>);
}
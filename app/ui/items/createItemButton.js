'use client'
import { useRouter } from "next/navigation";

export default function CreateItemButton() {
    const router = useRouter();

    function handleClick() {
        router.push('/item/create');
    }

    return (
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100 p-1">
            <button className="btn btn-success m-2 p-1 row text-nowrap" onClick={handleClick}>
                Create item
            </button>
        </div>
    );
}

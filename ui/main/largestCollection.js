import Link from "next/link";

export default function LargestCollection({ name, collectionId, itemsCount }) {
    return (
        <Link href={`/collection/${collectionId}`} className="text-decoration-none">
            <li className="col-12 border border-secondary rounded m-0 p-1 px-2 mb-1 mt-1 bg-body">
                <p className="p-0 m-0">
                    {itemsCount} - {name}
                </p>
            </li>
        </Link>
    );
}
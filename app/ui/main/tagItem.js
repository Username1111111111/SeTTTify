import Link from "next/link";

export default function TagItem({ name, itemId }) {
    return (
        <Link href={`/item/${itemId}`} className="text-decoration-none">
            <li className="col-12 border border-secondary rounded m-0 p-1 px-2 mb-1 mt-1">
                <p className="p-0 m-0">
                    {itemId} - {name}
                </p>
            </li>
        </Link>
    );
}

// list of latest items (name, collection, author)

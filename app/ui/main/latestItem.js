import Link from "next/link";

export default function LatestItem({ name, collection, author, itemId }) {
    return (
        <Link href={`/item/${itemId}`}>
            <li className="col-12 border border-secondary rounded m-0 p-1">
                <p className="p-0 m-0">
                    {itemId}, {name}, {collection}, {author}
                </p>
            </li>
        </Link>
    );
}

// list of latest items (name, collection, author)

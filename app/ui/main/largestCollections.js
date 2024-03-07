import Link from "next/link";

export function LargestCollection({ name, collectionId }) {
    return (
        <Link href={`/collection/${collectionId}`}>
            <li className="col-12 border border-secondary rounded m-0 p-1">
                <p className="p-0 m-0">
                    {collectionId} - {name}
                </p>
            </li>
        </Link>
    );
}

function createLargestCollections() {
    const itemCount = 10;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(
            <LargestCollection
                key={i}
                collectionId={i}
                name={`Collection name`}
            ></LargestCollection>
        );
    }
    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}

export default function LargestCollections() {
    return (
        <>
            <div>List of the top 5 largest collections</div>
            {createLargestCollections()}
        </>
    );
}

// list of the top 5 largest collections

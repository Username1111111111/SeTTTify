import LargestCollection from "./largestCollection";

function createLargestCollections() {
    const itemCount = 5;
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
        <div className="border border-secondary rounded p-1 m-0">
            <h4 className="text-center">Largest collections</h4>
            <hr/>
            {createLargestCollections()}
        </div>
    );
}

// list of the top 5 largest collections

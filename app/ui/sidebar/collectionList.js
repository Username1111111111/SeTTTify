import CollectionItem from "./collectionItem";

function createCollectionItems() {
    const colCount = 20;
    const allCollections = [];
    for (let i = 0; i < colCount; i++) {
        allCollections.push(<CollectionItem key={i}>{i}</CollectionItem>);
    }
    return <ul>{allCollections}</ul>;
}

export default function CollectionList() {
    return (
        <div className="row w-100">
            <p className="text-center mb-0 fs-5">Your collections:</p>
            {createCollectionItems()}
        </div>
    );
}

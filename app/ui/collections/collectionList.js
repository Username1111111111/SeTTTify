import CollectionItem from "./collectionItem";

function createCollectionItems() {
    const colCount = 20;
    const allCollections = [];
    for (let i = 0; i < colCount; i++) {
        allCollections.push(<CollectionItem key={i} id={i}/>);
    }
    return <ul className="row w-100 m-0 p-0">{allCollections}</ul>;
}

export default function CollectionList() {
    return (
        <div className="row w-100">
            <p className="text-center mb-0 fs-5">Your collections:</p>
            {createCollectionItems()}
        </div>
    );
}

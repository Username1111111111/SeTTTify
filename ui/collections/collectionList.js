import CollectionListItem from "./collectionListItem";

function createCollectionItems() {
    const colCount = 10;
    const allCollections = [];
    for (let i = 0; i < colCount; i++) {
        allCollections.push(<CollectionListItem key={i} id={i}/>);
    }
    return <ul className="row w-100 m-0 p-0 p-2">{allCollections}</ul>;
}

export default function CollectionList() {
    return (
        <div className="row w-100">
            <p className="text-center fs-5 mt-2 mb-0">Your collections:</p>
            {createCollectionItems()}
        </div>
    );
}

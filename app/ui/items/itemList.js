// import ItemCard from "./itemCard";
import ItemCard from "./itemCard";
import CollectionCard from "../collections/collectionCard";

function createItemCards() {
    const itemCount = 20;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(<ItemCard key={i} itemId={i}></ItemCard>);
    }
    return <ul className="row w-100 p-0 m-0">{allItems}</ul>;
}

export default function ItemList() {
    return (
        <div className="col-12 col-md-9">
            <div className="row w-100 p-0 m-0 d-flex flex-column justify-content-center align-items-center"><CollectionCard/></div>
            {createItemCards()}
        </div>
    );
}

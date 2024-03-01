import ItemCard from "./itemCard";

function createItemCards() {
    const itemCount = 20;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(<ItemCard key={i}>{i}</ItemCard>);
    }
    return <ul className="row d-flex w-100 p-0 m-0 pt-2">{allItems}</ul>;
}

export default function ItemList() {
    return (<>{createItemCards()}</>);
}
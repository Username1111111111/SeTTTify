import ItemCard from "./itemCard";

function createItemCards() {
    const itemCount = 20;
    const allItems = [];
    for (let i = 0; i < itemCount; i++) {
        allItems.push(<ItemCard key={i}>{i}</ItemCard>);
    }
    return <ul className="row w-100 pt-2 d-flex">{allItems}</ul>;
}

export default function ItemList() {
    return (<>{createItemCards()}</>);
}
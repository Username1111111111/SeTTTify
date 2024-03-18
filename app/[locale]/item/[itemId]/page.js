import ItemCard from "@/ui/items/itemCard";

export default function ItemPage({ params }) {
    const itemId = params.itemId;

    return <ItemCard itemId={itemId} />;
}

import ItemCard from "@/ui/items/itemCard";
import ItemCardEdit from "@/ui/items/itemCardEdit";

export default function ItemPage({ params }) {
    const itemId = params.itemId;

    if (itemId == 'create') {
        return <ItemCardEdit itemId={itemId} />
    } else {
        return <ItemCard itemId={itemId} />;
    }

    
}

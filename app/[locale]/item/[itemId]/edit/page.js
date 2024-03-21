import ItemCardEdit from "@/ui/items/itemCardEdit";

export default function ItemEditPage({ params }) {
    const itemId = params.itemId;
    const mode = "edit";
    
    return <ItemCardEdit itemId={itemId} mode={mode}/>;
}

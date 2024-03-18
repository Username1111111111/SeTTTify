import ItemCard from "@/ui/items/itemCard";
import ItemCardEdit from "@/ui/items/itemCardEdit";

export default function ItemPage({ params }) {
    const mode = "create";
    let currentSessionUserId = '7a3162da-edee-4de8-a2c6-529397a16c4e';

    return <ItemCardEdit userId={currentSessionUserId} mode={mode}/>

}
import ItemCard from "@/ui/items/itemCard";
import getUserByItemId from "@/lib/getUserByItemId";

export default async function ItemPage({ params }) {
    const itemId = params.itemId;
    const userId = await getUserByItemId(itemId);

    return <ItemCard itemId={itemId} userId={userId}/>;
}

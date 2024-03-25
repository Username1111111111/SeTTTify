import ItemList from "@/ui/items/itemList";
import getUserByCollectionId from "@/lib/getUserByCollectionId";

export default async function CollectionPage({ params }) {
    const collectionId = params.collectionId;
    const userId = await getUserByCollectionId(params.collectionId);

    // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.

    // https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#nesting-layouts

    return <ItemList collectionId={collectionId} userId={userId} />;
}

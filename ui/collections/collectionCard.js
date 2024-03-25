"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import CreateItemButton from "../items/createItemButton";
import CollectionIdField from "./fields/collectionIdField";
import CollectionNameField from "./fields/collectionNameField";
import DescriptionField from "./fields/descriptionField";
import ImageField from "./fields/imageField";
import TopicField from "./fields/topicField";
import getCollectionById from "@/lib/getCollectionById";

export default function CollectionCard({ collectionId, userId }) {
    const [collection, setCollection] = useState("");
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchCollection() {
            if (collectionId) {
                const data = await getCollectionById(collectionId);
                setCollection(data);
            }
        }
        fetchCollection();
    }, [collectionId]);

    return (
        <div className="col-12 col-md-8 col-lg-6 p-2 m-0">
            <div className="w-100 m-0 p-2 border border-secondary rounded bg-body-secondary">
                <ul className="w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
                    <CollectionIdField
                        collectionId={collectionId}
                        userId={userId}
                    />
                    <ImageField collectionImageUrl={collection.imageUrl} />
                    <CollectionNameField collectionName={collection.name} />
                    {collection.topic && (
                        <TopicField collectionTopic={collection.topic.name} />
                    )}
                    <DescriptionField
                        collectionDescription={collection.description}
                    />
                </ul>
                {(session && session?.user?.id == userId) ||
                (session && session?.user?.admin) ? (
                    <CreateItemButton collectionId={collectionId} />
                ) : null}
            </div>
        </div>
    );
}

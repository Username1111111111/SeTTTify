import CreateItemButton from "../items/createItemButton";
import CollectionIdField from "./fields/collectionIdField";
import CollectionNameField from "./fields/collectionNameField";
import DescriptionField from "./fields/descriptionField";
import ImageField from "./fields/imageField";
import TopicField from "./fields/topicField";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getDomain from "@/lib/getDomain";

export default function CollectionCard({ collectionId }) {
    const [collId, setCollectionId] = useState(collectionId);
    const [collection, setCollection] = useState("");
    const params = useParams();

    const domain = getDomain();

    if (!collectionId) {
        setCollectionId(params.collectionId);
    }

    useEffect(() => {
        async function getCollection(collectionId) {
            if (collectionId) {
                const req = new Request(
                    `${domain}/api/collection?collectionId=${collId}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const res = await fetch(req, {
                    cache: "force-cache",
                    next: { revalidate: 60 },
                });

                const data = await res.json();
                setCollection(data);
            }
        }
        getCollection(collId);
    }, [collId, domain]);

    return (
        <div className="col-12 col-md-8 col-lg-6 p-2 m-0">
            <div className="w-100 m-0 p-2 border border-secondary rounded bg-body-secondary">
                <ul className="w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center">
                    <CollectionIdField collectionId={collId} />
                    <ImageField collectionImageUrl={collection.imageUrl} />
                    <CollectionNameField collectionName={collection.name} />
                    {collection.topic && (
                        <TopicField collectionTopic={collection.topic.name} />
                    )}
                    <DescriptionField
                        collectionDescription={collection.description}
                    />
                </ul>
                <CreateItemButton collectionId={collId} />
            </div>
        </div>
    );
}

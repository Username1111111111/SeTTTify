import CreateItemButton from "../items/createItemButton";
import CollectionIdField from "./fields/collectionIdField";
import CollectionNameField from "./fields/collectionNameField";
import DescriptionField from "./fields/descriptionField";
import ImageField from "./fields/imageField";
import TopicField from "./fields/topicField";
import { useParams } from "next/navigation";

export default function CollectionCard({ collectionId }) {
    const params = useParams();
    
    if (!collectionId) {
        const collectionId = params.collectionId;
    }

    return (
        <div className="col-12 col-md-8 col-lg-6 pt-2 pb-2">
            <div className="w-100 m-0 p-2 border border-secondary rounded">
                <ul className="w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center" suppressHydrationWarning>
                        <CollectionIdField collectionId={collectionId} />
                        <CollectionNameField value={"Name"} />
                        <ImageField src={"/300.jpg"} />
                        <DescriptionField value={"Description with MD"} />
                        <TopicField value={"Topic from server"} />
                </ul>
                <CreateItemButton />
            </div>
        </div>
    );
}

// https://www.dropbox.com/developers/documentation

// collection: {
//     id: "string",
//     name: "string",
//     description: "string",
//     topic: "string",
//     image: "string (optional)",
//     fields: {
//         fixed: ["id", "name", "tags"],
//         optional: {
//             integer: ["int1", "int2", "int3"],
//             string: ["string1", "string2", "string3"],
//             text: ["text1", "text2", "text3"],
//             boolean: ["bool1", "bool2", "bool3"],
//             date: ["date1", "date2", "date3"],
//         },
//     },
//     items: ["itemId", "itemId2", "itemId3"]
// }

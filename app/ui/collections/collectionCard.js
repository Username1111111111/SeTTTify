import CreateItemButton from "../items/createItemButton";
import CollectionIdField from "./fields/collectionIdField";
import CollectionNameField from "./fields/collectionNameField";
import DescriptionField from "./fields/descriptionField";
import ImageField from "./fields/imageField";
import TopicField from "./fields/topicField";

export default function CollectionCard({ itemId }) {
    const itemid = 123;
    return (
        <div className="col-6">
            <table className="w-100 p-0 m-0" suppressHydrationWarning>
                <tbody>
                    <CollectionIdField colId={itemid} />
                    <CollectionNameField value={"Name"} />
                    <ImageField src={"/300.jpg"} />
                    <DescriptionField value={"Description with MD"} />
                    <TopicField value={"Topic from server"} />
                </tbody>
            </table>
            <CreateItemButton />
        </div>
    );
}

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

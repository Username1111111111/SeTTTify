import ItemIdField from "./fields/itemIdField";
import ItemNameField from "./fields/itemNameField";
import TaglistField from "./fields/taglistField";
import OptField from "./fields/optField";

export default function ItemCard({ itemId }) {

    return (
        <li className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1 bg-body-secondary">
                <table className="table w-100 p-0 m-0">
                    <tbody>
                        <ItemIdField itemId={itemId} />
                        <ItemNameField value={"Name"} />
                        <TaglistField value={"tag1, tag2, tag3"} />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"number"}
                            name={"number:"}
                            value={"number"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"string"}
                            name={"string:"}
                            value={"string"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"textarea"}
                            name={"textarea:"}
                            value={"textarea"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"checkbox"}
                            name={"checkbox:"}
                            value={"checkbox"}
                            itemId={itemId}
                        />

                        <OptField
                            type={"date"}
                            name={"date:"}
                            value={"date"}
                            itemId={itemId}
                        />
                    </tbody>
                </table>
            </div>
        </li>
    );
}

// item: {
//     id: "string",
//     name: "string",
//     tags: ["tag1", "tag2", "tag3"],
//     customFields: {
//         integer: "int",
//         string: "string",
//         text: "text",
//         boolean: "bool",
//         date: "date",
//     },
//     comments: ["comment1", "comment2", "comment3"],
//     likes: "int",
// },

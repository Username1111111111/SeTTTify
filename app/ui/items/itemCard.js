import DescriptionField from "./descriptionField";
import TopicField from "./topicField";
import NameField from "./nameField";
import TaglistField from "./taglistField";
import ButtonGroup from "../buttonGroup";
import IdField from "./idField";
import ImageField from "./imageField";
import OptField from "./optField";

export default function ItemCard({ itemId, itemData }) {
    return (
        <li className="col-12 col-md-6 p-0 m-0">

            <table>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>


            <div className="border border-secondary rounded m-2 p-1">
                <div className="d-flex flex-row justify-content-between align-items-center mt-2 mb-1">
                    <IdField itemId={itemId} />
                    {/* if authorized */}
                    <ButtonGroup itemId={itemId}/>
                </div>
                <NameField />
                <TaglistField />
                <OptField type={'number'} name={'number:'} value={'number'} itemId={itemId}/>
                <OptField type={'number'} name={'number:'} value={'number'} itemId={itemId}/>
                <OptField type={'number'} name={'number:'} value={'number'} itemId={itemId}/>
                <OptField type={'string'} name={'string:'} value={'string'} itemId={itemId}/>
                <OptField type={'string'} name={'string:'} value={'string'} itemId={itemId}/>
                <OptField type={'string'} name={'string:'} value={'string'} itemId={itemId}/>
                <OptField type={'textarea'} name={'textarea:'} value={'textarea'} itemId={itemId}/>
                <OptField type={'textarea'} name={'textarea:'} value={'textarea'} itemId={itemId}/>
                <OptField type={'textarea'} name={'textarea:'} value={'textarea'} itemId={itemId}/>
                <OptField type={'checkbox'} name={'checkbox:'} value={'checkbox'} itemId={itemId}/>
                <OptField type={'checkbox'} name={'checkbox:'} value={'checkbox'} itemId={itemId}/>
                <OptField type={'checkbox'} name={'checkbox:'} value={'checkbox'} itemId={itemId}/>
                <OptField type={'date'} name={'date:'} value={'date'} itemId={itemId}/>
                <OptField type={'date'} name={'date:'} value={'date'} itemId={itemId}/>
                <OptField type={'date'} name={'date:'} value={'date'} itemId={itemId}/>
                {/* Comments */}
                {/* Likes */}
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
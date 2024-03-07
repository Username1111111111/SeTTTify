import ItemIdField from "./fields/itemIdField";
import ItemNameField from "./fields/itemNameField";
import TaglistField from "./fields/taglistField";


export default function ItemItem({ itemId, itemData }) {

    return (
        <li className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1">
                <table className="table w-100 p-0 m-0">
                    <tbody>
                        <ItemIdField itemId={itemId} />
                        <ItemNameField value={'Name'}/>
                        <TaglistField value={'tag1, tag2, tag3'} />
                    </tbody>
                </table>
            </div>
        </li>
    );
}

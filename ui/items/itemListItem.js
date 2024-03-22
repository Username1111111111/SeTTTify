import ItemIdField from "./fields/itemIdField";
import ItemNameField from "./fields/itemNameField";
import TaglistField from "./fields/taglistField";


export default function ItemListItem({ itemId, itemName, itemTags }) {

    return (
        <li className="col-12 col-md-6 col-lg-4 p-0 m-0">
            <div className="row border border-secondary rounded m-2 p-1 bg-body-secondary">
                <table className="table col-12 p-0 m-0">
                    <tbody className='bg-body-secondary'>
                        <ItemIdField itemId={itemId} />
                        <ItemNameField itemName={itemName}/>
                        <TaglistField itemTags={itemTags} />
                    </tbody>
                </table>
            </div>
        </li>
    );
}

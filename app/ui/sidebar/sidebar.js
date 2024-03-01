import CollectionList from "./collectionList";
import CreateButton from "./createButton";

export default function Sidebar() {
    return (<div className="d-flex flex-column align-items-center">
        <CreateButton/>
        <CollectionList/>
    </div>);
}
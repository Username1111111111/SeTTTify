import CollectionList from "./collectionList";
import CreateCollectionButton from "./createCollectionButton";
import CreateItemButton from "./createItemButton";

export default function Sidebar() {
    return (<div className="d-flex flex-column align-items-center">
        {/* if authorized */}
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-around w-100 p-0">
            <CreateCollectionButton/>
            <CreateItemButton/>
        </div>
        
        <CollectionList/>
    </div>);
}
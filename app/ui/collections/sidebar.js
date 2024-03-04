import CollectionList from "./collectionList";
import CreateCollectionButton from "./createCollectionButton";

export default function Sidebar() {
    return (<div className="d-flex flex-column align-items-center">
        {/* if authorized */}
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100 p-0">
            <CreateCollectionButton/>
        </div>
        
        <CollectionList/>
    </div>);
}
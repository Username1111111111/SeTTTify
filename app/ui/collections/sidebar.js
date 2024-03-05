import CollectionList from "./collectionList";
import CreateCollectionButton from "./createCollectionButton";

export default function Sidebar() {
    return (<div className="col-12 col-md-3 border border-secondary border-top-0 p-0 m-0 d-flex flex-column align-items-center">
        {/* if authorized */}
        <div className="d-flex flex-row flex-wrap align-items-center justify-content-center w-100 p-0">
            <CreateCollectionButton/>
        </div>
        
        <CollectionList/>
    </div>);
}
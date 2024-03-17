import ButtonGroup from "../../buttonGroup";

export default function CollectionIdField({ collectionId }) {
    return (
        <li className="row w-100 p-0 m-0 mb-1 d-flex flex-row justify-content-start align-items-center">
            <div className="col-8">ID <u>{collectionId.slice(28)}</u></div>
            <div className="col-4 m-0 p-0 d-flex flex-row text-center justify-content-end align-items-center">
                <ButtonGroup id={collectionId} idType={"collection"} />
            </div>
        </li>
    );
}

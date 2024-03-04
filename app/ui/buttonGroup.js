import EditButton from "./editButton";
import DeleteButton from "./deleteButton";

export default function ButtonGroup({itemId}) {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center p-0 m-0">
            <EditButton />
            <DeleteButton />
        </div>
    );
}

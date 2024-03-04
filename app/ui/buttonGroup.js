import EditButton from "./editButton";
import DeleteButton from "./deleteButton";

export default function ButtonGroup({itemId, colId}) {
    return (
        <div className="d-flex justify-content-end align-items-center p-0 m-0">
            <EditButton />
            <DeleteButton />
        </div>
    );
}

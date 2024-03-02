import EditButton from "./editButton";
import DeleteButton from "./deleteButton";

export default function ButtonGroup() {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center">
            <EditButton />
            <DeleteButton />
        </div>
    );
}

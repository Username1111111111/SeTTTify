import { BsTrash } from "react-icons/bs";

export default function DeleteButton() {
    return (
        <button type="button" className="btn text-nowrap p-0 me-1" title="Delete">
            <BsTrash size="1.4em" />
        </button>
    );
}

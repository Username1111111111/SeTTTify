import { BsTrash } from "react-icons/bs";

export default function DeleteButton() {
    return (
        <button type="button" className="btn border-0 text-nowrap p-0 m-0" title="Delete">
            <BsTrash size="1.4em" />
        </button>
    );
}

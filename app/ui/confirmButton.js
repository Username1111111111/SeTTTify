import { FaCheck } from "react-icons/fa";

export default function ConfirmButton() {
    return (
        <button type="button" className="btn btn-primary text-nowrap m-0" title="Delete">
            Confirm <FaCheck size="1.4em" />
        </button>
    );
}

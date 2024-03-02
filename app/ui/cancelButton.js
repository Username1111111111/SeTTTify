import { GiCancel } from "react-icons/gi";

export default function CancelButton() {
    return (
        <button type="button" className="btn btn-danger text-nowrap m-0" title="Delete">
            Cancel <GiCancel size="1.5em" />
        </button>
    );
}

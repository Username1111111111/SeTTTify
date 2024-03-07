import { GiCancel } from "react-icons/gi";

export default function CancelButton() {
    return (
        <button type="button" className="btn btn-secondary text-nowrap m-0 ms-3" title="Cancel">
            Cancel <GiCancel size="1.5em" />
        </button>
    );
}

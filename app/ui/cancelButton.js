import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/navigation";

export default function CancelButton() {
    const router = useRouter();

    const handleCancel = () => {
        router.back();
    };

    return (
        <button
            type="button"
            className="btn btn-secondary text-nowrap m-0 ms-3"
            title="Cancel"
            onClick={handleCancel}
        >
            Cancel <GiCancel size="1.5em" />
        </button>
    );
}

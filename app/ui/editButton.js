import { BiSolidEditAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function EditButton({ id, idType }) {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/${idType}/${id}/edit`);
        console.log(`Editing ${idType} with ID: ${id}`);
    };

    return (
        <button
            type="button"
            className="btn border-0 text-nowrap p-0 m-0 me-1"
            title="Edit"
            onClick={handleEdit}
        >
            <BiSolidEditAlt size="1.4em" className="m-0 p-0" />
        </button>
    );
}

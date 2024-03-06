import { BsTrash } from "react-icons/bs";

export default function DeleteButton({ id, idType }) {
    const handleDelete = () => {
        // router.push(`/${idType}/${id}/delete`);
        console.log(`Deleting ${idType} with ID: ${id}`);
    };

    return (
        <>
            <button
                type="button"
                className="btn border-0 text-nowrap p-0 m-0"
                title="Delete"
            >
                <BsTrash size="1.4em" className="m-0 p-0" />
            </button>
        </>
    );
}

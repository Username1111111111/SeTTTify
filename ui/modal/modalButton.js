export default function ModalButton({
    title,
    confirmButtonName,
    discardButtonName,
    modalText,
    onConfirm,
}) {
    return (
        <button
            type="button"
            className="btn border-0 text-nowrap p-0 m-0"
            title="Delete"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
        >
            {/* <BsTrash size="1.4em" className="m-0 p-0" /> */}
        </button>
    );
}

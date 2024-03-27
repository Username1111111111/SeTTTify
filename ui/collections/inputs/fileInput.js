import styles from "../collectionEdit.module.css";

export default function FileInput({
    name,
    placeholder,
    collectionId,
    setImage,
}) {
    async function handleFileChange(event) {
        const file = await event.target.files[0];
        setImage(file);
        if (file) {
            previewFile(file);
            // console.log(file.name);
        } else {
            const preview = document.querySelector("#imageThumbnail");
            preview.classList.add("d-none");
        }
    }

    function previewFile(file) {
        const preview = document.querySelector("#imageThumbnail");
        preview.classList.remove("d-none");
        const reader = new FileReader();

        reader.addEventListener(
            "load",
            () => {
                preview.src = reader.result;
            },
            false
        );

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={`image-${collectionId}`}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0 d-flex flex-row justify-content-between align-items-center">
                <img id="imageThumbnail" className="imgPreview rounded p-0" />
                <input
                    className={`form-control border border-secondary m-0 ${styles.customFileButton} d-none`}
                    type="file"
                    name="file"
                    accept="image/*"
                    id={`image-${collectionId}`}
                    placeholder={placeholder}
                    onChange={handleFileChange}
                />
                <label
                    htmlFor={`image-${collectionId}`}
                    className="btn btn-secondary rounded col-4 m-0 p-1 text-nowrap flex-grow-1"
                >
                    Choose image
                </label>
            </div>
        </li>
    );
}

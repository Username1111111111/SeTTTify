export default function OptField({ name, value, type }) {
    let optField;

    if (type === "number") {
        optField = (
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Number: </p>
                <p className="p-0 m-0">3 integer inputs</p>
            </div>
        );
    } else if (type === "string") {
        optField = (
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">String: </p>
                <p className="p-0 m-0">3 string inputs</p>
            </div>
        );
    } else if (type === "textarea") {
        optField = (
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Textarea: </p>
                <p className="p-0 m-0">3 textareas</p>
            </div>
        );
    } else if (type === "checkbox") {
        optField = (
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 Checkboxes: </p>
                <input
                    className="form-check-input m-0 p-0 me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                    disabled
                />
            </div>
        );
    } else if (type === "date") {
        optField = (
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 dates: </p>
                <p className="p-0 m-0">Dates</p>
            </div>
        );
    }

    return optField;
}

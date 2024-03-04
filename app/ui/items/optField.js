export default function OptField({ name, value, type, itemId }) {
    let optField;

    function generateUniqueId() {
        const timestamp = Date.now().toString(36);
        const randomString = Math.random().toString(36).substr(2, 5);
        return `${timestamp}${randomString}`;
    }
    

    function Row(name, value) {
        return (
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p scope="row" className="p-0 m-0 me-1">
                    {name}
                </p>
                <p scope="row" className="p-0 m-0">
                    {value}
                </p>
            </div>
        );
    }

    if (
        type === "number" ||
        type === "string" ||
        type === "textarea" ||
        type === "date"
    ) {
        optField = Row(name, value);
    } else if (type === "checkbox") {
        optField = (
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <p className="p-0 m-0 me-1">{name}</p>
                    <input
                        className="form-check-input m-0 p-0 me-2"
                        type="checkbox"
                        // value={value}
                        id={`checkboxDisplay-${itemId}-${generateUniqueId()}`}
                        checked
                        disabled
                    />
            </div>
        );
    }
    return optField;
}

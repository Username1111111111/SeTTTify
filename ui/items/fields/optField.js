export default function OptField({ name, value, type, itemId }) {
    let optField;

    function generateUniqueId() {
        const timestamp = Date.now().toString(36);
        const randomString = Math.random().toString(36).substr(2, 5);
        return `${timestamp}${randomString}`;
    }

    function Row(name, value) {
        return (
            <tr className="">
                <td scope="row" className="bg-body-secondary">
                    {name}
                </td>
                <td scope="row" className="bg-body-secondary">
                    {value}
                </td>
            </tr>
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
            <tr className="">
                <td className="bg-body-secondary">{name}</td>
                <td className="bg-body-secondary">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        // value={value}
                        id={`checkboxDisplay-${itemId}-${generateUniqueId()}`}
                        checked
                        disabled
                    />
                </td>
            </tr>
        );
    }
    return optField;
}

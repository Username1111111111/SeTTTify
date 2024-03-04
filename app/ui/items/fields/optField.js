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
                <td scope="row" className="">
                    {name}
                </td>
                <td scope="row" className="">
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
                <td className="">{name}</td>
                <td>
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

import generateUniqueId from "@/lib/generateUniqueId";

export default function OptField({ name, value, type, itemId }) {
    let optField;

    function Row(name, value) {
        return (
            <tr className="">
                <td scope="row" className="bg-body-secondary">
                    {name}:
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
                <td className="bg-body-secondary">{name}:</td>
                <td className="bg-body-secondary">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value={value}
                        id={`checkboxDisplay-${
                            itemId ? itemId : "create"
                        }-${generateUniqueId()}`}
                        checked={value}
                        disabled
                    />
                </td>
            </tr>
        );
    }
    return optField;
}

export default function ItemNameField({ value }) {
    return (
        <tr>
            <td className="bg-body-secondary">Name: </td>
            <td className="bg-body-secondary">{ value }</td>
        </tr>
    );
}

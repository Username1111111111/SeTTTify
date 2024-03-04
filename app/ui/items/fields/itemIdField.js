import ButtonGroup from "../../buttonGroup";

export default function ItemIdField({itemId}) {
    return (
        <tr>
            <td>#id {itemId}</td>
            <td className=""><ButtonGroup itemId={itemId}/></td>
        </tr>
    );
}

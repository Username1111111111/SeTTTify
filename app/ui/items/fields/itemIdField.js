import ButtonGroup from "../../buttonGroup";

export default function ItemIdField({itemId}) {
    return (
        <tr>
            <td>#id {itemId}</td>
            <td className=""><ButtonGroup id={itemId} idType={'item'}/></td>
        </tr>
    );
}

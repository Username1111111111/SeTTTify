import Link from "next/link";
import ButtonGroup from "../../buttonGroup";

export default function ItemIdField({itemId}) {
    return (
        <tr>
            <td>#id <Link href={`/item/${itemId}`}>{itemId}</Link></td>
            <td className=""><ButtonGroup id={itemId} idType={'item'}/></td>
        </tr>
    );
}

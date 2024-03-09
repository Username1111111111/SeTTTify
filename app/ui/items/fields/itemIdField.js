import Link from "next/link";
import ButtonGroup from "../../buttonGroup";

export default function ItemIdField({itemId}) {
    return (
        <tr>
            <td className=""><Link href={`/item/${itemId}`} className="w-100 p-0 m-0">#id {itemId}</Link></td>
            <td className=""><ButtonGroup id={itemId} idType={'item'}/></td>
        </tr>
    );
}

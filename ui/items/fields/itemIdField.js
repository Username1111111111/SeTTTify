import Link from "next/link";
import ButtonGroup from "../../buttonGroup";

export default function ItemIdField({itemId, userId}) {
    return (
        <tr>
            <td className="bg-body-secondary text-nowrap">ID <Link href={`/item/${itemId}`} className="w-100 p-0 m-0 text-center"> {itemId.slice(28)}</Link></td>
            <td className="bg-body-secondary"><ButtonGroup id={itemId} idType={'item'} userId={userId}/></td>
        </tr>
    );
}

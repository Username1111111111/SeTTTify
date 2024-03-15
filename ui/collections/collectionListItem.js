import Link from "next/link";
import ButtonGroup from "../buttonGroup";

export default function CollectionListItem({ id, name }) {
    const idType = "collection";

    return (
        <li className="d-flex flex-row text-center justify-content-between align-items-center border boder-secondary rounded text-nowrap fs-6 p-0 m-0 mb-2 bg-body">
            <Link href={`/collection/${id}`} className="nav-link text-start active fs-6 text-wrap w-100 h-100 p-0 m-2 d-flex align-items-center">{name}</Link>
            {/* if authorized */}
            <ButtonGroup id={id} idType={idType}/>
        </li>
    );
}

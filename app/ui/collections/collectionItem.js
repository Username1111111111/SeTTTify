import Link from "next/link";
import ButtonGroup from "../buttonGroup";

export default function CollectionItem({ id }) {
    const idType = "collection";

    return (
        <li className="d-flex flex-row text-center justify-content-between align-items-center text-nowrap fs-6 pt-0 pb-0">
            <Link href={`/collection/${id}`} className="nav-link text-start active fs-6 text-wrap w-100" >Collection #{id}</Link>
            {/* if authorized */}
            <ButtonGroup id={id} idType={idType}/>
        </li>
    );
}

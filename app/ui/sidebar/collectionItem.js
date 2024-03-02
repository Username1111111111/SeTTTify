import Link from "next/link";
import ButtonGroup from "../buttonGroup";

export default function CollectionItem({ children }) {
    return (
        <li className="d-flex flex-row text-center justify-content-between align-items-center text-nowrap fs-6 pt-0 pb-0">
            <Link href="" className="nav-link active fs-6 ms-1 text-wrap" >Collection #{children}</Link>
            {/* if authorized */}
            <ButtonGroup/>
        </li>
    );
}

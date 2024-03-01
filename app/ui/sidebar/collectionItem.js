import Link from "next/link";
import { BiSolidEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function CollectionItem({ children }) {
    return (
        <li className="d-flex flex-row text-center justify-content-between align-items-center text-nowrap fs-6 pt-0 pb-0">
            <Link href="" className="nav-link active fs-6 ms-1" >Collection #{children}</Link>
            {/* if authorized */}
            <div>
                <button
                    type="button"
                    className="btn text-nowrap p-0"
                    title="Edit"
                >
                    <BiSolidEditAlt size="1.4em" />
                </button>
                <button
                    type="button"
                    className="btn text-nowrap p-0"
                    title="Delete"
                >
                    <BsTrash size="1.4em" />
                </button>
            </div>
        </li>
    );
}

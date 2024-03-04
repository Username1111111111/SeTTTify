import { BiSolidEditAlt } from "react-icons/bi";

export default function EditButton() {
    return (
        <button type="button" className="btn border-0 text-nowrap p-0 m-0 me-1" title="Edit">
            <BiSolidEditAlt size="1.4em" className="m-0 p-0" />
        </button>
    );
}

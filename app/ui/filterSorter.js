import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";


export default function FilterSorter({ onFilter, onSort }) {
    return (
        <div className="row my-2 p-2 border border-secondary rounded bg-body-secondary">
            <div className="col-12 col-md-6 text-center mb-2 mb-md-0">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 col-md-8 col-lg-6">
                        <input
                            type="text"
                            placeholder="Filter by tag"
                            onChange={onFilter}
                            className="form-control border border-secondary"
                        />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center">
                <button className="btn btn-secondary p-1 me-2" onClick={() => onSort("asc")}>Asc <FaSortAlphaDown size={'1.4em'}/></button>
                <button className="btn btn-secondary p-1" onClick={() => onSort("desc")}>Desc <FaSortAlphaDownAlt  size={'1.4em'}/></button>
            </div>
        </div>
    );
}

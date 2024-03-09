export default function FilterSorter({ onFilter, onSort }) {
    return (
        <div className="row mt-2 mb-2">
            <div className="col-6 text-center">
                <input type="text" placeholder="Filter by tag" onChange={onFilter} />
            </div>
            <div className="col-6 text-center">
                <button onClick={() => onSort('asc')}>Sort Ascending</button>
                <button onClick={() => onSort('desc')}>Sort Descending</button>
            </div>
        </div>
    );
}

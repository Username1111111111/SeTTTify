export default function CheckboxFieldOpt({name, value}) {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center mb-1">
            <p className="p-0 m-0 me-1">3 Checkboxes: </p>
            <input
                className="form-check-input m-0 p-0 me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                checked
                disabled
            />
        </div>
    );
}

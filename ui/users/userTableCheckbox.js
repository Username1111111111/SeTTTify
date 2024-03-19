export default function UserTableCheckbox({checked, onChange}) {

    return (
            <div className="form-check d-flex align-items-center justify-content-center m-0">
                <input
                    className="form-check-input border border-secondary"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={checked}
                    onChange={onChange}
                ></input>
            </div>
    );
}

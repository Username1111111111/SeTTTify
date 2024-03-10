export default function UserTableCheckbox({checked, onChange}) {

    return (
            <div className="form-check">
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

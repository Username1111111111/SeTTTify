import generateUniqueId from "@/lib/generateUniqueId";

export default function UserTableCheckbox({checked, onChange}) {
    const id = `checkbox-usertable-${generateUniqueId()}`;

    return (
            <div className="form-check d-flex align-items-center justify-content-center m-0">
                <input
                    className="form-check-input border border-secondary"
                    type="checkbox"
                    value=""
                    id={id}
                    checked={checked}
                    onChange={onChange}
                ></input>
            </div>
    );
}

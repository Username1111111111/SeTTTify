import generateUniqueId from "@/lib/generateUniqueId";
import { useState } from "react";

export default function CheckboxInput({ itemId, name, value, onChange }) {
    const [inputValue, setInputValue] = useState(!!value);

    const handleInputChange = (event) => {
        setInputValue(event.target.checked);
        onChange(event.target.checked);
    };

    const inputId = `checkbox-${itemId ? itemId : "create"}-${generateUniqueId()}`;

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label htmlFor={inputId} className="col-4 m-0 w-100">
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 d-flex flex-row justify-content-start align-items-center">
                <input
                    className="form-check-input border border-secondary m-0 p-0"
                    type="checkbox"
                    value=""
                    id={inputId}
                    checked={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </li>
    );
}

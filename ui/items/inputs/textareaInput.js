import generateUniqueId from "@/lib/generateUniqueId";
import { useState } from "react";

export default function TextareaInput({ itemId, placeholder, name, value, onChange }) {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
    };

    const inputId = `textarea-${itemId ? itemId : "create"}-${generateUniqueId()}`;

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label htmlFor={inputId} className="col-4 m-0 w-100">
                    {name}
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <textarea
                    id={inputId}
                    name="opt"
                    rows={3}
                    className="form-control border border-secondary flex-grow-1 w-100 m-0"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                ></textarea>
            </div>
        </li>
    );
}

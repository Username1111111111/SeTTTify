import generateUniqueId from "@/lib/generateUniqueId";
import formatDate from "@/lib/formatDate";
import { useState } from "react";

export default function DateInput({ itemId, name, value, onChange }) {
    const date = formatDate( value || new Date);
    const [inputValue, setInputValue] = useState(date);
    // console.log(inputValue)

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onChange(event.target.value);
        console.log(event.target.value)
    };

    const inputId = `date-${itemId ? itemId : "create"}-${generateUniqueId()}`;

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={inputId}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    type="date"
                    className="form-control border border-secondary flex-grow-1"
                    id={inputId}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </li>
    );
}

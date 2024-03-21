"use client";
import { useState, useEffect } from "react";

export default function NameInput({ itemId, placeholder, name, value }) {
    const [inputValue, setInputValue] = useState(value);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label htmlFor={`name-${itemId}`} className="col-4 m-0 w-100">
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    type="email"
                    className="form-control border border-secondary"
                    // id={`name-${itemId ? itemId : "create"}-${generateUniqueId()}`}
                    id={`name-${itemId ? itemId : "create"}`}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>
        </li>
    );
}

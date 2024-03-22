"use client";
import { useState, useEffect, useRef } from "react";
import generateUniqueId from "@/lib/generateUniqueId";

export default function NameInput({ itemId, placeholder, name, value, onChange }) {
    const [inputValue, setInputValue] = useState(value);
    // const inputIdRef = useRef(`name-${itemId ? itemId : "create"}-${generateUniqueId()}`);
    const inputIdRef = useRef(`name-${itemId ? itemId : "create"}`);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
        onChange(event.target.value);
    };

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    // const inputId = `name-${itemId ? itemId : "create"}-${generateUniqueId()}`;

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label htmlFor={inputIdRef.current} className="col-4 m-0 w-100">
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    type="email"
                    className="form-control border border-secondary"
                    id={inputIdRef.current}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={inputValue}
                />
            </div>
        </li>
    );
}

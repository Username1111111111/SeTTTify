import { useState, useEffect } from "react";

export default function NameInput({ name, placeholder, collectionName, collectionId, onChange }) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(collectionName);
    }, [collectionName])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
        onChange(event.target.value);
    };


    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={`name-${collectionId}`}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    type="email"
                    className="form-control border border-secondary"
                    id={`name-${collectionId}`}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </li>
    );
}

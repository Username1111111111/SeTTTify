import { useState, useEffect } from "react";

export default function DescriptionInput({name, collectionId, description, onChange}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(description);
    }, [description])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
        onChange(event.target.value);
    };

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2 rounded">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={`description-${collectionId}`}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <textarea
                    id={`description-${collectionId}`}
                    name={`description-${collectionId}`}
                    rows={4}
                    value={inputValue}
                    onChange={handleInputChange}
                    className="form-control border border-secondary bg-body-primary rounded flex-grow-1 w-100 p-2 m-0"
                />
            </div>
        </li>
    );
}

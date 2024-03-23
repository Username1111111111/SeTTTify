import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export default function OptInput({ fieldType, fieldNumber, name, state, collectionId, onChange }) {
    const t = useTranslations("Collection");
    const [inputValue, setInputValue] = useState(name);
    const [inputState, setInputState] = useState(false);

    useEffect(() => {
        setInputValue(name);
        setInputState(state);
    }, [name, state])

    const handleInputStateChange = (event) => {
        setInputState(event.target.checked);
        // console.log(event.target.value);
        // onChange(event.target.value);
        onChange(event.target.checked, inputValue)
    };

    const handleInputValueChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
        onChange(inputState, event.target.value);
    };

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                <input
                    className="form-check-input border border-secondary m-0 p-0 ms-3 me-3"
                    type="checkbox"
                    checked={ inputState ? true : false }
                    id={`checkbox-${fieldType}${fieldNumber}-${collectionId}`}
                    onChange={handleInputStateChange}
                />

                <label
                    htmlFor={`checkbox-${fieldType}${fieldNumber}-${collectionId}`}
                    className="m-0 p-0 text-center"
                >
                    {`${t(fieldType).charAt(0).toUpperCase()+t(fieldType).slice(1)} №${fieldNumber}`}
                </label>
            </div>
            <div className="col-7 col-md-8 d-flex flex-row justify-content-center align-items-center pe-0">
                <input
                    type="email"
                    className="form-control border border-secondary"
                    id={`name-${fieldType}${fieldNumber}-${collectionId}`}
                    placeholder={`${t("name_for")} ${t(fieldType)} №${fieldNumber}`}
                    value={inputValue ? inputValue : ""}
                    onChange={handleInputValueChange}
                />
            </div>
        </li>
    );
}

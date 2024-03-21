import generateUniqueId from "@/lib/generateUniqueId";
import formatDate from "@/lib/formatDate";
import { useState } from "react";

export default function DateInput({ itemId, placeholder, name, value }) {
    const date = formatDate(new Date);
    const [inputValue, setInputValue] = useState(date);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor="exampleFormControlInput1"
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    type="date"
                    className="form-control border border-secondary flex-grow-1"
                    id={`date-${itemId ? itemId : "create"}-${generateUniqueId()}`}
                    // placeholder={t("mdy")}
                    // lang={t("lang")}
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>
        </li>
    );
}

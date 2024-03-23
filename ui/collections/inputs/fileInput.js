import styles from '../collectionEdit.module.css';
import { useEffect, useState } from "react";

export default function FileInput({name, placeholder, collectionId, imageUrl}) {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setInputValue(imageUrl);
    }, [imageUrl])

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        // console.log(event.target.value);
        // onChange(event.target.value);
    };


    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0">
                <label
                    htmlFor={`image-${collectionId}`}
                    className="col-4 m-0 w-100"
                >
                    {name}:
                </label>
            </div>
            <div className="col-7 col-md-8 pe-0">
                <input
                    className={`form-control border border-secondary ${styles.customFileButton}`}
                    type="file"
                    id={`image-${collectionId}`}
                    placeholder={placeholder}
                />
            </div>
        </li>
    );
}

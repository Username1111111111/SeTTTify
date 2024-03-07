import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import styles from './tagInput.module.css'

const TagInput = () => {
    const [tags, setTags] = useState(["test"]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === "Enter" && inputValue) {
            if (!tags.includes(inputValue)) {
                setTags([...tags, inputValue]);
                setInputValue("");
            } else {
                alert("Duplicated tag");
            }
        }
    };

    const removeTag = (indexToRemove) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="form-control border border-secondary p-1 m-0 d-flex flex-wrap justify-content-start align-items-center">
            {tags.map((tag, index) => (
                <span key={index} className="btn-primary border border-secondary rounded d-flex flex-row justify-content-start align-items-center m-1 ps-1 text-nowrap">
                    {tag}
                    <button type="button" className="btn d-flex flex-row justify-content-start align-items-center p-0 m-0 ms-1 me-1 bg-body" onClick={() => removeTag(index)}>
                        <IoMdClose color={'red'} />
                    </button>
                </span>
            ))}

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    placeholder="Tags..."
                    size={6}
                    className={`${styles.tagInput} bg-body border border-secondary rounded p-0 ps-2 pe-2 m-0`}
                />

        </div>
    );
};

export default TagInput;

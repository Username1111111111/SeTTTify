import EditButtonGroup from "../editButtonGroup";
import NameInput from "./inputs/nameInput";

export default function ItemCardEdit({itemId }) {
    return (
        <div className="col-12 col-md-6 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1">
                <div className="d-flex flex-row justify-content-between align-items-center mt-1 mb-1">
                    <div className="text-center">#{itemId}</div>
                </div>

                <div className="col-4 mb-1 me-1">Tags:</div>

                <NameInput />

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor={`description-${itemId}`}
                        className="col-4 m-0 me-1"
                    >
                        Description:
                    </label>
                    <textarea
                        id={`description-${itemId}`}
                        name={`description-${itemId}`}
                        rows="2"
                        defaultValue="Textarea"
                        className="flex-grow-1"
                    />
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor={`topic-${itemId}`}
                        className="col-4 m-0 me-1"
                    >
                        Topic:
                    </label>
                    <select
                        id={`topic-${itemId}`}
                        className="form-select flex-grow-1"
                        aria-label="Default select example"
                    >
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor={`image-${itemId}`}
                        className="col-4 m-0 me-1"
                    >
                        Image:
                    </label>
                    <input
                        className="form-control"
                        type="file"
                        id={`image-${itemId}`}
                    />
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="col-4 m-0 me-1"
                    >
                        3 integer inputs
                    </label>
                    <input
                        type="number"
                        className="form-control flex-grow-1"
                        id={`integer-${itemId}`}
                        placeholder="Numbers"
                    />
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="col-4 m-0 me-1"
                    >
                        3 string inputs
                    </label>
                    <input
                        type="text"
                        className="form-control flex-grow-1"
                        id={`string-${itemId}`}
                        placeholder="Text"
                    />
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label htmlFor="opt m-0" className="col-4 m-0 me-1">
                        3 optional textareas
                    </label>
                    <textarea
                        id={`textarea-${itemId}`}
                        name="opt"
                        rows="2"
                        className="flex-grow-1"
                        defaultValue="Textarea"
                    ></textarea>
                </div>

                <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                    <label
                        htmlFor="flexCheckDefault"
                        className="col-4 m-0 me-1"
                    >
                        3 optional checkboxes
                    </label>
                    <input
                        className="form-check-input m-0 ms-4"
                        type="checkbox"
                        value=""
                        id={`checkbox-${itemId}`}
                    />
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="col-4 m-0 me-1"
                    >
                        3 date inputs
                    </label>
                    <input
                        type="date"
                        className="form-control flex-grow-1"
                        id={`date-${itemId}`}
                        placeholder="Numbers"
                    />
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center m-0 p-0 mb-1">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}

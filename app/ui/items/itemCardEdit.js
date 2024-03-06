import EditButtonGroup from "../editButtonGroup";
import NameInput from "./inputs/nameInput";

export default function ItemCardEdit({ itemId }) {
    return (
        <div className="col-12 col-md-10 p-0 m-0">
            <div className="border border-secondary rounded m-2 p-1">
                <ul className="w-100 p-0 m-0">
                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">#{itemId}</div>
                        <div className="col-8">asd</div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">Tags:</div>
                        <div className="col-8">asd</div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 me-1"
                            >
                                Name:
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                type="email"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="Name of item"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor={`description-${itemId}`}
                                className="col-4 m-0 me-1"
                            >
                                Description:
                            </label>
                        </div>
                        <div className="col-8">
                            <textarea
                                id={`description-${itemId}`}
                                name={`description-${itemId}`}
                                rows={3}
                                defaultValue="Textarea"
                                className="flex-grow-1 w-100 p-0 m-0"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor={`topic-${itemId}`}
                                className="col-4 m-0 me-1"
                            >
                                Topic:
                            </label>
                        </div>
                        <div className="col-8">
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
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor={`image-${itemId}`}
                                className="col-4 m-0 me-1"
                            >
                                Image:
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                className="form-control"
                                type="file"
                                id={`image-${itemId}`}
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 me-1"
                            >
                                3 integer inputs
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                type="number"
                                className="form-control flex-grow-1"
                                id={`integer-${itemId}`}
                                placeholder="Numbers"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 me-1"
                            >
                                3 string inputs
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                type="text"
                                className="form-control flex-grow-1"
                                id={`string-${itemId}`}
                                placeholder="Text"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label htmlFor="opt m-0" className="col-4 m-0 me-1">
                                3 optional textareas
                            </label>
                        </div>
                        <div className="col-8 m-0 p-0">
                            <textarea
                                id={`textarea-${itemId}`}
                                name="opt"
                                rows={3}
                                className="flex-grow-1 w-100 p-0 m-0"
                                defaultValue="Textarea"
                            ></textarea>
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor="flexCheckDefault"
                                className="col-4 m-0 me-1"
                            >
                                3 optional checkboxes
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                className="form-check-input m-0 ms-4"
                                type="checkbox"
                                value=""
                                id={`checkbox-${itemId}`}
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-md-4">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 me-1"
                            >
                                3 date inputs
                            </label>
                        </div>
                        <div className="col-8">
                            <input
                                type="date"
                                className="form-control flex-grow-1"
                                id={`date-${itemId}`}
                                placeholder="Numbers"
                            />
                        </div>
                    </li>
                </ul>

                <div className="d-flex flex-row justify-content-around align-items-center m-0 p-0 mb-1">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}

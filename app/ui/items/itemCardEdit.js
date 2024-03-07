"use client"
import EditButtonGroup from "../editButtonGroup";
import TagInput from "./inputs/tagInput";

export default function ItemCardEdit({ itemId }) {
    return (
        <div className="col-12 col-md-10 col-lg-8 p-0 m-0 pt-2">
            <div className="border border-secondary rounded m-2 p-1">
                <ul className="w-100 p-0 m-0">
                    {/* <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">ID</div>
                        <div className="col-7 col-md-8 pe-0">{itemId ? itemId : "To be generated"}</div>
                    </li> */}

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">Tags:</div>
                        <div className="col-7 col-md-8 pe-0"><TagInput/></div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`name-${itemId}`}
                                className="col-4 m-0 w-100"
                            >
                                Name:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="email"
                                className="form-control border border-secondary"
                                id={`name-${itemId}`}
                                placeholder="Name of item"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 w-100"
                            >
                                3 integer inputs
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="number"
                                className="form-control border border-secondary flex-grow-1"
                                id={`integer-${itemId}`}
                                placeholder="Numbers"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 w-100"
                            >
                                3 string inputs
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="text"
                                className="form-control border border-secondary flex-grow-1"
                                id={`string-${itemId}`}
                                placeholder="Text"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor="opt m-0"
                                className="col-4 m-0 w-100"
                            >
                                3 optional textareas
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <textarea
                                id={`textarea-${itemId}`}
                                name="opt"
                                rows={3}
                                className="form-control border border-secondary flex-grow-1 w-100 p-0 m-0"
                                defaultValue=""
                            ></textarea>
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor="flexCheckDefault"
                                className="col-4 m-0 w-100"
                            >
                                3 optional checkboxes
                            </label>
                        </div>
                        <div className="col-7 col-md-8 d-flex flex-row justify-content-center align-items-center">
                            <input
                                className="form-check-input border border-secondary m-0 p-0"
                                type="checkbox"
                                value=""
                                id={`checkbox-${itemId}`}
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="col-4 m-0 w-100"
                            >
                                3 date inputs
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="date"
                                className="form-control border border-secondary flex-grow-1"
                                id={`date-${itemId}`}
                                placeholder="Numbers"
                            />
                        </div>
                    </li>
                </ul>

                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0 mb-1">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}

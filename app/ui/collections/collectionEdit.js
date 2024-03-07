"use client";
import EditButtonGroup from "../editButtonGroup";
import OptInput from "./inputs/optInput";

export default function CollectionEdit({ collectionId }) {
    return (
        <div className="col-12 col-md-10 col-lg-8 p-0 m-0 pt-2">
            <div className="border border-secondary rounded m-2 p-1">
                <ul className="w-100 p-0 m-0">
                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`name-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                Name:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="email"
                                className="form-control border border-secondary"
                                id={`name-${collectionId}`}
                                placeholder="Name of collection"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`description-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                Description:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <textarea
                                id={`description-${collectionId}`}
                                name={`description-${collectionId}`}
                                rows={3}
                                defaultValue=""
                                className="form-control border border-secondary flex-grow-1 w-100 p-2 m-0"
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`topic-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                Topic:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <select
                                id={`topic-${collectionId}`}
                                className="form-select border border-secondary flex-grow-1"
                                aria-label="Default select example"
                            >
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`image-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                Image:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                className="form-control border border-secondary"
                                type="file"
                                id={`image-${collectionId}`}
                            />
                        </div>
                    </li>

                    <OptInput fieldType={"integer"} fieldNumber={1} collectionId={collectionId}/>
                    <OptInput fieldType={"integer"} fieldNumber={2} collectionId={collectionId}/>
                    <OptInput fieldType={"integer"} fieldNumber={3} collectionId={collectionId}/>
                    <OptInput fieldType={"string"} fieldNumber={1} collectionId={collectionId}/>
                    <OptInput fieldType={"string"} fieldNumber={2} collectionId={collectionId}/>
                    <OptInput fieldType={"string"} fieldNumber={3} collectionId={collectionId}/>
                    <OptInput fieldType={"textarea"} fieldNumber={1} collectionId={collectionId}/>
                    <OptInput fieldType={"textarea"} fieldNumber={2} collectionId={collectionId}/>
                    <OptInput fieldType={"textarea"} fieldNumber={3} collectionId={collectionId}/>
                    <OptInput fieldType={"checkbox"} fieldNumber={1} collectionId={collectionId}/>
                    <OptInput fieldType={"checkbox"} fieldNumber={2} collectionId={collectionId}/>
                    <OptInput fieldType={"checkbox"} fieldNumber={3} collectionId={collectionId}/>
                    <OptInput fieldType={"date"} fieldNumber={1} collectionId={collectionId}/>
                    <OptInput fieldType={"date"} fieldNumber={2} collectionId={collectionId}/>
                    <OptInput fieldType={"date"} fieldNumber={3} collectionId={collectionId}/>

                </ul>

                <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0 mb-1">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}

// collection: {
//     id: "string",
//     name: "string",
//     description: "string",
//     topic: "string",
//     image: "string (optional)",
//     fields: {
//         fixed: ["id", "name", "tags"],
//         optional: {
//             integer: ["int1", "int2", "int3"],
//             string: ["string1", "string2", "string3"],
//             text: ["text1", "text2", "text3"],
//             boolean: ["bool1", "bool2", "bool3"],
//             date: ["date1", "date2", "date3"],
//         },
//     },
//     items: ["collectionId", "collectionId2", "collectionId3"]
// }

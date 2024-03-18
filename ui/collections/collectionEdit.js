"use client";
import EditButtonGroup from "../editButtonGroup";
import OptInput from "./inputs/optInput";
import { useTranslations } from "next-intl";
import styles from './collectionEdit.module.css'

export default function CollectionEdit({ collectionId, userId, mode }) {
    const t = useTranslations("Collection");

    // If in edit mode then fetch data from DB else if create mode leave fields empty

    return (
        <div className="col-12 col-md-10 col-lg-8 p-0 m-0 pt-2">
            <div className="border border-secondary rounded m-2 mt-0 p-1 bg-body-secondary">
                <ul className="w-100 p-0 m-0 p-1">
                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`name-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                {t("name")}:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                type="email"
                                className="form-control border border-secondary"
                                id={`name-${collectionId}`}
                                placeholder={`${t("name_of_collection")}`}
                            />
                        </div>
                    </li>

                    <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
                        <div className="col-5 col-md-4 m-0 p-0">
                            <label
                                htmlFor={`description-${collectionId}`}
                                className="col-4 m-0 w-100"
                            >
                                {t("description")}:
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
                                {t("topic")}:
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
                                {t("image")}:
                            </label>
                        </div>
                        <div className="col-7 col-md-8 pe-0">
                            <input
                                className={`form-control border border-secondary ${styles.customFileButton}`}
                                type="file"
                                id={`image-${collectionId}`}
                                placeholder={`${t("choose_file")}`}
                            />
                        </div>
                    </li>

                    <hr></hr>  

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

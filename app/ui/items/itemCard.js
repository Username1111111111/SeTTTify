import { BiSolidEditAlt } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Image from "next/image";

export default function ItemCard({ children }) {
    return (
        <li className="col-12 col-md-4 d-flex flex-column justify-content-between">
            <div className="d-flex flex-row justify-content-between align-items-center mt-2 mb-1">
                <div className="text-center">#id {children}</div>
                {/* if authorized */}
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <button
                        type="button"
                        className="btn text-nowrap p-0"
                        title="Edit"
                    >
                        <BiSolidEditAlt size="1.4em" />
                    </button>
                    <button
                        type="button"
                        className="btn text-nowrap p-0"
                        title="Delete"
                    >
                        <BsTrash size="1.4em" />
                    </button>
                </div>
            </div>

            <div className="mb-1">Tags</div>
            <Image width="200" height="100" src="/300.jpg" className="mb-1" alt="hello"/>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Name: </p>
                <p className="p-0 m-0">Name from server</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Description: </p>
                <p className="p-0 m-0">Description with MD</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Topic: </p>
                <p className="p-0 m-0">Topic from server</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Number: </p>
                <p className="p-0 m-0">3 integer inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Number: </p>
                <p className="p-0 m-0">3 integer inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Number: </p>
                <p className="p-0 m-0">3 integer inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">String: </p>
                <p className="p-0 m-0">3 string inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">String: </p>
                <p className="p-0 m-0">3 string inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">String: </p>
                <p className="p-0 m-0">3 string inputs</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Textarea: </p>
                <p className="p-0 m-0">3 textareas</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Textarea: </p>
                <p className="p-0 m-0">3 textareas</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">Textarea: </p>
                <p className="p-0 m-0">3 textareas</p>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 Checkboxes: </p>
                <input
                    className="form-check-input m-0 p-0 me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                    disabled
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 Checkboxes: </p>
                <input
                    className="form-check-input m-0 p-0 me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                    disabled
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 Checkboxes: </p>
                <input
                    className="form-check-input m-0 p-0 me-2"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked
                    disabled
                />
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 dates: </p>
                <p className="p-0 m-0">Dates</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 dates: </p>
                <p className="p-0 m-0">Dates</p>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center mb-1">
                <p className="p-0 m-0 me-1">3 dates: </p>
                <p className="p-0 m-0">Dates</p>
            </div>
        </li>
    );
}

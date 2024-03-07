export default function OptInput({ fieldType, fieldNumber, collectionId }) {
    return (
        <li className="row w-100 p-0 m-0 d-flex flex-row justify-content-start align-items-center mb-2">
            <div className="col-5 col-md-4 m-0 p-0 d-flex flex-row justify-content-start align-items-center">
                <input
                    className="form-check-input border border-secondary m-0 p-0 ms-3 me-3"
                    type="checkbox"
                    value=""
                    id={`checkbox-${fieldType}${fieldNumber}-${collectionId}`}
                />

                <label
                    htmlFor={`checkbox-${fieldType}${fieldNumber}-${collectionId}`}
                    className="m-0 p-0 text-center"
                >
                    {`${fieldType} №${fieldNumber}`}
                </label>
            </div>
            <div className="col-7 col-md-8 d-flex flex-row justify-content-center align-items-center pe-0">
                <input
                    type="email"
                    className="form-control border border-secondary"
                    id={`name-${fieldType}${fieldNumber}-${collectionId}`}
                    placeholder={`Name for ${fieldType} №${fieldNumber}`}
                />
            </div>
        </li>
    );
}

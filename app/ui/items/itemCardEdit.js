export default function ItemCardEdit({ children }) {
    return (
        <li className="col-12 col-md-4 d-flex flex-column justify-content-between">
            <div className="d-flex flex-row justify-content-between align-items-center mt-2 mb-1">
                <div className="text-center">#id {children}</div>
            </div>
            <div className="mb-1">Tags</div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Name
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name of item"
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="story">Description:</label>
                <textarea
                    id="story"
                    name="story"
                    rows="2"
                    cols="30"
                    defaultValue="Textarea"
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="topic">Topic:</label>
                <select
                    id="topic"
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <input className="form-control" type="file" id="formFile" />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    3 integer inputs
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Numbers"
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    3 string inputs
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Text"
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="opt">3 optional textareas</label>
                <textarea
                    id="opt"
                    name="opt"
                    rows="2"
                    cols="30"
                    defaultValue="Textarea"
                ></textarea>
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    3 optional checkboxes
                </label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-1">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    3 date inputs
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Numbers"
                />
            </div>
        </li>
    );
}

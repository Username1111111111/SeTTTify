export default function NameInput() {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center mb-1">
            <label htmlFor="exampleFormControlInput1" className="col-4 m-0 me-1">
                Name:
            </label>
            <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name of item"
            />
        </div>
    );
}

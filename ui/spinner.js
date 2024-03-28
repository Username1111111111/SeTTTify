export default function Spinner() {
    return (
        <div className="d-flex flex-grow-1 justify-content-center align-content-center p-2 minWidth100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

import EditButtonGroup from "./editButtonGroup";

export default function DeletePage({ id, idType }) {
    return (
        <div className="row w-100 p-0 m-0 d-flex flex-column justify-content-start align-items-center pt-2">
            <div className="col-6 border border-secondary rounded p-1 mt-2 bg-body-secondary">
                <div className="text-center mb-1">
                    Are you sure you want to delete {idType} {id}?
                </div>
                <div className="d-flex flex-row text-center justify-content-center align-items-center">
                    <EditButtonGroup />
                </div>
            </div>
        </div>
    );
}

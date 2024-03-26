export default function UserProfile({ name }) {
    return (
        <div className="btn btn-none border border-0 m-1 d-flex flex-row justify-content-between align-items-center text-nowrap">
            <div className="fs-5 fw-bold text-center text-nowrap profileIcon me-1 d-flex align-items-center justify-content-center">
                {name.slice(0, 1)}
            </div>
            <b>{name ? name : null}</b>
        </div>
    );
}

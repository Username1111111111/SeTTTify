export default function NavMenu() {
    return (
        <nav className="container-fluid">
            <div className="row align-items-center justify-content-center">
                <div className="d-none d-md-flex col-auto">SeTTTify</div>
                <ul className="col list-unstyled d-flex justify-content-around justify-content-center justify-content-md-start mb-0">
                        <li className="me-1 me-md-3">Home</li>
                        <li className="me-1 me-md-3">My collections</li>
                        <li className="me-1 me-md-3">Users</li>
                    </ul>
            </div>
        </nav>
    );
}

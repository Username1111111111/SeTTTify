import Image from "next/image";
import styles from "./navmenu.module.css";
import Link from "next/link";

export default function NavMenu() {
    return (
        <nav className="row align-items-center justify-content-center w-100">
            <Image
                src="/settify.svg"
                alt="Settify Logo"
                width="56"
                height="56"
                className={`${styles.logo} col-auto pe-0 pt-1 pb-1`}
            />
            <ul className="col list-unstyled d-flex justify-content-around justify-content-md-start mb-0 w-100">
                <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    <Link href="#" className="nav-link active fs-5">
                        Home
                    </Link>
                </li>
                <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    <Link href="#" className="nav-link fs-5">
                        Collections
                    </Link>
                </li>
                <li className="nav-item me-1 me-md-3 fs-6 py-2">
                    <Link href="#" className={`nav-link fs-5`}>
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

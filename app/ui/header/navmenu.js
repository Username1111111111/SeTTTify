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
                className={`${styles.logo} col-auto`}
            />
            <ul className="col list-unstyled d-flex justify-content-around justify-content-md-start mb-0">
                <li className="nav-item me-1 me-md-3">
                    <Link href="" className="nav-link active">
                        Home
                    </Link>
                </li>
                <li className="nav-item me-1 me-md-3">
                    <Link href="" className="nav-link">
                        Collections
                    </Link>
                </li>
                <li className="nav-item me-1 me-md-3">
                    <Link href="" className="nav-link">
                        Users
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

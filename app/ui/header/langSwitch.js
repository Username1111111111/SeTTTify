import { BsTranslate } from "react-icons/bs";
import styles from './langSwitch.module.css'

export default function LangSwitch() {
    return (
            <div className={`p-0`}>
                <button
                    className={`btn border-0 p-0`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <BsTranslate size="2.0em"/>
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <a className="dropdown-item" href="">
                        🇬🇪 Georgian
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="">
                        🇺🇸 English
                        </a>
                    </li>
                </ul>
            </div>
    );
}

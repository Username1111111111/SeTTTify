import { BsTranslate } from "react-icons/bs";

export default function LangSwitch() {
    return (
        <div className="d-flex flex-row justify-content-center align-content-center">
            {" "}
            <div class="dropdown">
                <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <BsTranslate /> Language
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <a class="dropdown-item" href="#">
                            English
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Georgian
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

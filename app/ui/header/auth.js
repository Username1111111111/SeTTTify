import Login from "./login";
import Signup from "./signup";
import User from "./user";

export default function Auth() {
    return (
        <div className="d-flex flex-row">
            <Login />
            <Signup/>
            <User/>
        </div>
    );
}

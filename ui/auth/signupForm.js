"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import getDomain from "@/lib/getDomain";
import createUser from "@/lib/createUser";

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const domain = getDomain();
    const router = useRouter();

    async function handleClick(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        const res = await createUser({ name, email, password });

        if (res.status == 409) {
            alert("Email have already used. Choose other.");
            return;
        } else if (res.status == 201) {
            signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            router.push(`${domain}/`);
        } else {
            alert(`An error occurred. Please try again later. ${res.status}`);
        }
    }

    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2 m-0">
            <div className="col-12 col-md-6 col-lg-5 border border-secondary rounded p-3 bg-body-secondary">
                <h2 className="text-center h2 w-100 p-0 m-0">Sign up</h2>
                <hr></hr>
                <form className="row w-100 p-0 m-0">
                    <div className="row d-flex flex-row justify-content-start align-items-center w-100 p-0 m-0 mb-2">
                        <div className="col-3 p-0 m-0">
                            <label
                                className="form-label p-0 m-0"
                                htmlFor="signup-name"
                            >
                                Name
                            </label>
                        </div>
                        <div className="col-9 p-0 m-0">
                            <input
                                type="text"
                                id="signup-name"
                                className="form-control ms-1"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row d-flex flex-row justify-content-start align-items-center w-100 p-0 m-0 mb-2">
                        <div className="col-3 p-0 m-0">
                            <label
                                className="form-label p-0 m-0"
                                htmlFor="signup-email"
                            >
                                Email
                            </label>
                        </div>
                        <div className="col-9 p-0 m-0">
                            <input
                                type="email"
                                id="signup-email"
                                className="form-control ms-1"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="row d-flex flex-row justify-content-start align-items-center w-100 p-0 m-0 mb-2">
                        <div className="col-3 p-0 m-0">
                            <label
                                className="form-label p-0 m-0"
                                htmlFor="signup-password"
                            >
                                Password
                            </label>
                        </div>
                        <div className="col-9 p-0 m-0">
                            <input
                                type="password"
                                id="signup-password"
                                className="form-control ms-1"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleClick}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

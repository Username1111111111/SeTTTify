"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import getDomain from "@/lib/getDomain";

const domain = getDomain();

export default function SignupForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleClick(e) {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        // console.log(`email: -----> ${email}`);
        // console.log(`password: -----> ${password}`);

        const requestBody = {
            providedKey: "email",
            providedData: email,
        };

        const req = new Request(`${domain}/api/findData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

        // console.log(`req in singnUp: -----> ${req}`);

        const res = await fetch(req);

        // console.log(`res in singnUp: -----> ${res}`);

        // console.log(`res: -----> ${res}`);
        // console.log(`res.status: -----> ${res.status}`);

        if (res.status == 200) {
            const user = await res.json();
            console.log(`User found: ${user}`);
            alert("Email already used. Choose other.");
            return;
        } else {
            const data = [
                {
                    name,
                    email,
                    password, // I was too lazy to HASH password etc and it wasnt' required, but I know that it must be implemented in every other serious project
                    lastloginDate: new Date(),
                    signupDate: new Date(),
                    status: "active",
                },
            ];

            const response = await fetch(
                `http://localhost:3000/api/createUser`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            console.log(`response.status: -----> ${response.status}`);

            if (response.status == 201) {
                signIn("credentials", {
                    email,
                    password,
                    callbackUrl: `${domain}/`,
                    redirect: false,
                });
                redirect(`${domain}/`);
            } else if (response.status === 409) {
                // Email already exists
                alert("Email already used. Choose another.");
            } else {
                // Other errors
                alert("An error occurred. Please try again later.");
            }
        }
    }

    return (
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-2 m-0">
            <div className="col-12 col-md-6 col-lg-5 border border-secondary rounded p-2 bg-body-secondary">
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

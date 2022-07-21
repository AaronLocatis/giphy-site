// import React, { useContext, useState } from "react";
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";

// function LoginPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const { login } = useContext(UserContext);

//     function loginUser() { }

//     return (
//         <>
//             <h1>Login</h1>
//             <div>
//                 <label htmlFor="userInput">Username</label>
//                 <input
//                     value={username}
//                     id="userInput"
//                     type={"text"}
//                     onChange={(e) => setUsername(e.target.value)}
//                 ></input>
//             </div>
//             <div>
//                 <label htmlFor="passwordInput">Password</label>
//                 <input
//                     value={password}
//                     id="passwordInput"
//                     type={"password"}
//                     onChange={(e) => setPassword(e.target.value)}
//                 ></input>
//             </div>
//             <button
//                 className="btn btn-secondary"
//                 onClick={() => {
//                     if (username.length > 0 && password.length > 0) {
//                         login(username);
//                         navigate("/search");
//                     }
//                 }}
//             >
//                 Login
//             </button>
//             { }
//         </>
//     );
// }

// export default LoginPage;

import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [passText, setPassText] = useState(false);
    const showPassword = () => {
        setPassText(!passText);
    };
    return (
        <>
            <h1 className="text-center">Login</h1>
            <div className="mb-3 container">

                <label htmlFor="userInput" className="form-label">
                    Username
                </label>
                <input
                    className="form-control"
                    value={username}
                    id="userInput"
                    type={"text"}
                    onChange={(e) => setUsername(e.target.value)}
                ></input>
            </div>
            <div className="mb-3 container">
                <label htmlFor="passwordInput" className="form-label">
                    Password
                </label>
                <input
                    className="form-control"
                    value={password}
                    id="passwordInput"
                    type={passText ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className="btn btn-primary" onClick={showPassword}>
                    Show Password
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        if (username.length > 0 && password.length > 0) {
                            login(username);
                            navigate("/search");
                        }
                    }}
                >
                    Login
                </button>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary btn btn-info btn-lg" type="button"
                        onClick={() => navigate("/register")
                        }>
                        Create New Account
                    </button>

                </div>


            </div>
            { }
        </>
    );
}
export default LoginPage;
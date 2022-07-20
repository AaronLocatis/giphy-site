import React, { useState } from "react";


const RegisterPage = () => {
    const [userName, setUserName] = useState(null)
    return (
        <>
            <h1>Register</h1>
            <div>
                <label htmlFor="userInput">Username</label>
                <input
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    id="userInput" type={"text"}></input>

            </div>
            <div>
                <label htmlFor="passwordInput">Password</label>
                <input id="passwordInput" type={"text"}></input>
                <label htmlFor="passwordCheck">Confirm Password</label>
                <input id="passwordCheck" type={"text"}></input>
            </div>
            <button className="btn btn-secondary">Create Account</button>
        </>

    )
}

export default RegisterPage

// import React, { useState } from "react";


// const RegisterPage = () => {
//     const [userName, setUserName] = useState(null)
//     const [password, setPassword] = useState(null)
//     const [passwordCheck, setPasswordCheck] = useState(null)

//     return (
//         <>
//             <h1>Register</h1>
//             <div>
//                 <label htmlFor="userInput">Username</label>
//                 <input
//                     value={userName}
//                     onChange={(e) => {
//                         setUserName(e.target.value);
//                     }}
//                     id="userInput" type={"text"}></input>

//             </div>
//             {userName}
//             <div>
//                 <label htmlFor="passwordInput">Password</label>
//                 <input
//                     value={password}
//                     onChange={(e) => {
//                         setPassword(e.target.value);
//                     }}
//                     id="passwordInput" type={"text"}></input>
//                 <label htmlFor="passwordCheck">Confirm Password</label>
//                 <input
//                     value={passwordCheck}
//                     onChange={(e) => {
//                         setPasswordCheck(e.target.value);
//                     }}
//                     id="passwordCheck" type={"text"}></input>
//             </div>
//             {password} {passwordCheck}
//             <button
//                 onClick={() => {
//                     if (password.length === 0 || userName.length === 0 || passwordCheck.length === 0) {

//                     } else {

//                     }
//                 }}

//                 className="btn btn-secondary">Create Account</button>
//         </>

//     )
// }

// export default RegisterPage
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

function RegisterPage() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isCPasswordDirty) {
            if (password === cPassword) {
                setShowErrorMessage(false);
                setCPasswordClass('form-control is-valid')
            } else {
                setShowErrorMessage(true)
                setCPasswordClass('form-control is-invalid')
            }
        }
    }, [cPassword])

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    return (

        <div className='container' >
            <h1 className="text-center">Register</h1>
            <div>
                <div className='mb-3'>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="username" className="form-control" id="username" value={userName}
                        onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className={cPasswordClass} id="confirmPassword" value={cPassword}
                        onChange={handleCPassword} />
                </div>
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}

                <button type="submit" className="btn btn-primary"
                    onClick={() => {
                        if (userName.length > 0 && password.length > 0) {

                            navigate("/login");
                        }
                    }}>Submit
                </button>
            </div>
        </div>
    )
}

export default RegisterPage

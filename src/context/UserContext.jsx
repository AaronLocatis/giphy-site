import React, { useState, useCallback } from "react";


export const UserContext = React.createContext(null);

export function UserProvider(props) {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const login = useCallback(
        (username) => {
            setLoggedInUser(username);
        },
        [setLoggedInUser]
    );
    const logout = useCallback(() => {
        setLoggedInUser(null);
    }, [setLoggedInUser]);

    return (
        <UserContext.Provider value={{ loggedInUser, login, logout }}>
            {props.children}
        </UserContext.Provider>
    );
}
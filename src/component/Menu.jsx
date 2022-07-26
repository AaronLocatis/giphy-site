import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Menu = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <header className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {loggedInUser && (
                    <div>
                        <img src="https://media1.giphy.com/media/2YpTTV69fQsH5BqxSm/giphy.gif" />
                        <h3> Hello {loggedInUser}</h3>
                    </div>
                )}
                <div>
                    <NavLink
                        to="/search"
                        className="links"
                    >
                        <h3>Search Gifs</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/login"
                        className="links"
                    >
                        <h3>Login</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/register"
                        className="links"
                    >
                        <h3>Register</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/favorites"
                        className="links"

                    >
                        <h3>Favorites</h3>
                    </NavLink>
                </div>
            </div>
        </header>
    );
};
export default Menu;
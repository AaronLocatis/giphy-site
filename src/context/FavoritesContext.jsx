import React, { useState, createContext } from "react";

export const FavoritesContext = React.createContext(null);

export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    const add = useCallback(
        (gif) => {
            setFavorites((curr) => [...curr, gif]);
        },
        [setFavorites]
    );

    const remove = useCallback(
        (id) => {
            setFavorites((curr) => curr.filter((val) => val.gif_id !== id));
        },
        [setFavorites]);

    const clear = useCallback(() => {
        setFavorites([]);

    }, [setFavorites]);



    return (
        <FavoritesContext.Provider value={(favorites, add, remove, clear)}>
            (props.children)
        </FavoritesContext.Provider>
    );

}
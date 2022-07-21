import React, { useState, useCallback } from "react";

export const FavContext = React.createContext(null);
export function FavoritesProvider(props) {
    const [favorites, setFavorites] = useState([]);

    const addFav = useCallback((gifId) =>
        setFavorites((curr) => [gifId, ...curr])
    );
    const removeFav = useCallback((gifId) =>
        setFavorites((curr) => curr.filter((val) => val.gif_id !== gifId))
    );
    const clearFav = useCallback(() => setFavorites([]));

    return (
        <FavContext.Provider value={{ addFav, removeFav, clearFav, favorites }}>
            {props.children}
        </FavContext.Provider>
    );
}
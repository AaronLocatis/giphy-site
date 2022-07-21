import React, { useContext } from "react";
import { removeFav, clearFav, FavContext } from "../context/FavContext";
const FavPage = () => {
    const { favorites, clearFav } = useContext(FavContext);
    return (
        <>
            <h1 className="text-center">Favorites</h1>
            <button
                className="btn btn-secondary"
                onClick={() => {
                    clearFav();
                }}
            >
                clear all
            </button>
            {favorites.map((gif) => {
                return <img alt="gif" src={gif.gifUrl}></img>;
            })}
            {console.log(favorites)}
        </>
    );
};

export default FavPage;
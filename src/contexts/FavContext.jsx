import { createContext, useEffect, useState } from "react";


export const FavContext = createContext()

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([])

    useEffect(() => {
        const localFav = JSON.parse(localStorage.getItem("favourites"));
        setFav(localFav);
    },[]);
  
    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(fav));
    },[fav])

    return (
        <FavContext.Provider value={[fav, setFav]}>{children}</FavContext.Provider>
    )
}
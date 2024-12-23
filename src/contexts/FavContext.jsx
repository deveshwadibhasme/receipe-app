import { createContext, useState } from "react";


export const FavContext = createContext()

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState([])
    // console.log(fav);
    return (
        <FavContext.Provider value={[fav, setFav]}>{children}</FavContext.Provider>
    )
}
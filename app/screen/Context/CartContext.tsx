import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

import Cart from "../Cart";

const favouriteContext = createContext(null);
export const usefavoriteContext=()=>{
    const context = useContext(favouriteContext)
    if(context == undefined){
        throw new Error(
            'Favorite'
        )
    }
    return context
}

const favouriteContextProvider = ({children})=> {
    const [favourites,setFavorites] = useState([]);
    const addTo = useCallback(item =>{
        const oldTo =[favourites];
        const newTo = oldTo.concat(item);
        setFavorites(newTo)
    },[favourites],); 
    const value = useMemo(
            ()=>({
                favourites,
                addTo,
            }),
            [favourites,addTo],
        );
    
    return(
        <favouriteContext.Provider value={value}>
            {children}
        </favouriteContext.Provider>
    )
};
export default favouriteContextProvider
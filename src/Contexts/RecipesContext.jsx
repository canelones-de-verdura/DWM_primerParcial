import { createContext, useState } from "react";

export const RecipesContext = createContext();

export function RecipesManager({ children }) {
    const [recipes, setRecipes] = useState([]);

    const manager = {
        recipes,
        setRecipes,
    }

    return (
        <RecipesContext.Provider value={manager} >
            { children }
        </RecipesContext.Provider>
    );

}

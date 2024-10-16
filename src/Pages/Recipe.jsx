import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ApiService from "../Services/ApiService";
import "./Recipe.css"

function Recipe() {
    const { id } = useParams();
    const [current_recipe, setCurrentRecipe] = useState(null);

    useEffect(() => {
        const getRecipe = async () => {
            const res = await ApiService.get(id);

            if (res.code === 200)
                setCurrentRecipe(res.data);
        };

        getRecipe();
    }, []);

    if (current_recipe === null)
        return (<p>Loading...</p>);

    return (
        <div className="recipescreen">
            <Link to={"/"}>Atrás</Link>
            <h1>{current_recipe.name}</h1>
            <p>Type: {current_recipe.type}</p>
            <p>{current_recipe.description}</p>
            <p><em>{current_recipe.preparation}</em></p>
        </div>
    );
}

export default Recipe;

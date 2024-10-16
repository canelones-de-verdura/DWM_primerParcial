import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Recipe.css"
import Input from "../Components/Input";
import ApiService from "../Services/ApiService";

function NewRecipe() {
    const [new_recipe, setNewRecipe] = useState({
        name: "",
        description: "",
        type: "",
        preparation: "",
    });

    const addToRecipe = (name, value) => {
        setNewRecipe({
            ...new_recipe,
            [name]: value,
        });
    };

    const addRecipeToList = () => {
        let empty = false;
        Object.values(new_recipe).forEach(x => {
            if (x === "") {
                empty = true;
            }
        });

        if (empty) {
            alert("Missing fields.");
            return;
        }

        const pushToBack = async () => {
            const res = await ApiService.post("", new_recipe);

            if (res.code === 201)
                alert("Recipe added.");
            else
                alert("There was an error.");
        };

        pushToBack();
        return;
    };

    const fields = ["name", "description", "type", "preparation"];
    return (
        <div className="recipescreen">
            <Link to={"/"}>Atrás</Link>

            {fields.map((field, key) => {
                return <Input name={field} addToPlaceholder={addToRecipe} placeholderValue={new_recipe[field]} key={key} />
            })}

            <Link to={"/"}>
                <button onClick={addRecipeToList}>Confirm</button>
            </Link>
        </div>
    );
}

export default NewRecipe;

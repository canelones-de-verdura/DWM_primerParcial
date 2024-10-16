import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import "./Home.css"
import { RecipesContext } from "../Contexts/RecipesContext";
import ApiService from "../Services/ApiService";

function Home() {
    const recipe_list = useContext(RecipesContext);
    const [filter, setFilter] = useState("");

    const getRecipes = async () => {
        const recipes = await ApiService.get("");

        if (recipes.code === 200)
            recipe_list.setRecipes(recipes.data);
    };

    const delete_func = async (recipe_id) => {
        const res = await ApiService.delete(recipe_id);

        if (res.code === 200) { // Se borró, hacemos el get de nuevo
            await getRecipes();
        }

    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    }

    useEffect(() => {
        getRecipes();
    }, []);


    const filterRecipes = () => {
        let recipes;
        if (filter !== "")
            recipes = recipe_list.recipes.filter(recipe => recipe.type === filter);
        else
            recipes = recipe_list.recipes;

        return recipes.map((recipe, key) => {
            return <Card data={recipe} delete_func={delete_func} key={key} />
        })
    }

    const tipos = ["italiana", "ensalada", "japonesa", "vegana", "india", "mediterránea"]; //hardcodeado porque no me dio el tiempo.
    // idealmente, quería iterar por el array y recuperar de ahí los tipos
    return (
        <div className="home">

            <div className="home-header">
                <h1 className="home-title">Recetas</h1>
                { /* Esto podría (tendría) que haber sido un componente aparte */ }
                <div className="home-filter">
                    <p className="filter-desc">Filtros:</p>
                    <select
                        name="Filtrar"
                        required
                        onChange={handleFilterChange}
                        value={filter} >
                        <option value="">{"Sin filtro"}</option>
                        {tipos.map((opcion, idx) => {
                            return <option key={idx} value={opcion}>{opcion}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="recipes">
                {filterRecipes()}
            </div>

            <Link to={"/add"}>
                <button onClick={() => console.log(`👉 To /add`)}>Agregar receta</button>
            </Link>
        </div>
    );
}

export default Home;

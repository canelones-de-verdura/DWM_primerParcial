import { Route, Routes } from 'react-router-dom'
import { RecipesManager } from './Contexts/RecipesContext'
import Home from "./Pages/Home"
import Recipe from './Pages/Recipe'
import NewRecipe from './Pages/NewRecipe'
import './App.css'

function App() {

    return (
        <>
            <RecipesManager>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/details" exact >
                        <Route path=":id" element={<Recipe />} exact />
                    </Route>
                    <Route path="/add"  element={<NewRecipe />} exact />
                </Routes>
            </RecipesManager>
        </>
    )
}

export default App

import { Link } from "react-router-dom";
import Input from "./Input";

function FillRecipe({ fields, placeholder_obj, update_placeholder, onConfirm }) {
    return (
        <div className="recipescreen">
            <Link to={"/"}>Atrás</Link>

            {fields.map((field, key) => {
                return <Input name={field} addToPlaceholder={update_placeholder} placeholderValue={placeholder_obj[field]} key={key} />
            })}

            <Link to={"/"}>
                <button onClick={onConfirm}>Confirm</button>
            </Link>
        </div>
    );
}

export default FillRecipe;

import { Link } from "react-router-dom";
import "./Card.css"

function Card({ data, delete_func }) {
    const recipe_url = `/details/${data.id}`;

    return (
        <div className="card">
            <div className="card-title">
                <h2>{data.name}</h2>
            </div>
            <Link to={recipe_url}>
                <button className="card-button" onClick={() => console.log(`👉 To ${recipe_url}`)}>Detalles</button>
            </Link>
            <button className="card-button" onClick={() => delete_func(data.id)}>Borrar</button>
        </div>
    );
}

export default Card;

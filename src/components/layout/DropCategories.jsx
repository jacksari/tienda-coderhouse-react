import React, {useContext} from 'react';
import FetchHooks from "../../hooks/fetchHooks";
import {
    Link
} from "react-router-dom";
import productContext from "../../context/product/productContext";

function DropCategories() {
    const { categories } = useContext(productContext);
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    categories.map((category, index) => (
                        <li key={index}>
                            <Link className="dropdown-item" to={`/categorias/${category.id}`}>{ category.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
}

export default DropCategories;

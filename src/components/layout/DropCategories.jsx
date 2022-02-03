import React from 'react';
import FetchHooks from "../../hooks/fetchHooks";
import {
    Link
} from "react-router-dom";

function DropCategories(props) {
    const { data, loading, error } = FetchHooks('https://service.dened.org/api/categories');
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
               data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    !loading && data.categories.map((category, index) => (
                        <li key={index}>
                            <Link className="dropdown-item" to={`/categorias/${category.uid}`}>{ category.title }</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    );
}

export default DropCategories;

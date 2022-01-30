import React from 'react';
import FetchHooks from "../../hooks/fetchHooks";

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
                    data.categories && data.categories.map((category, index) => (
                        <li key={index}><a className="dropdown-item" href={`/categorias/${category.uid}`}>{ category.title }</a></li>
                    ))
                }
            </ul>
        </li>
    );
}

export default DropCategories;

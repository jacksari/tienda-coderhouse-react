import React from 'react';
import {
    Link
} from "react-router-dom";

function CategoryItem({category}) {
    const { name, id } = category;
    return (
        <Link className="item-category" to={`/categorias/${id}`} >
            <h3>{name}</h3>
            <p>{ 'Odontología' }</p>
        </Link>
    );
}

export default CategoryItem;

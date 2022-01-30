import React from 'react';
import {
    Link
} from "react-router-dom";

function CategoryItem({category}) {
    const { title, slug, uid, career } = category;
    return (
        <Link className="item-category" to={`/categorias/${uid}`} >
            <h3>{title}</h3>
            <p>{ career.title }</p>
        </Link>
    );
}

export default CategoryItem;

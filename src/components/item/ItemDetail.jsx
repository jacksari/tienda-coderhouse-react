import React from 'react';
import {
    Link
} from "react-router-dom";

function ItemDetail({product}) {
    //console.log(product)
    const { title, img, category, teacher, stars, slug, price } = product;
    return (
        <div  className="item-product">
            <div className="container-image">
                <Link to={`/productos/${slug}`} className=" link">
                    <img src={img.url} className="card-img-top" alt=""/>
                    <p className="text">{ category.title }</p>
                </Link>
            </div>
            <div className="card-product">
                <Link to={`/productos/${slug}`} className="title">{ title }</Link>
                <div className="container-teacher-name">
                    <h3 className="teacher-title">Prof: { teacher.user.nombre } { teacher.user.apellidos }</h3>
                    <p className="m-0"><i className="fas fa-star"></i> { stars.toFixed(2) }</p>
                </div>
                <div className="container-btn">
                    <button type="button" className="btn-product btn-carrito">Agregar al carrito</button>
                    <button type="button" className="btn-product">Comprar ${ price }.00</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

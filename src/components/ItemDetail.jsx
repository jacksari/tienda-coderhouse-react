import React from 'react';

function ItemDetail({product}) {
    console.log(product)
    const { title, img, category, teacher, stars } = product;
    return (
        <div className="item-product">
            <div className="container-image">
                <img src={img.url} className="card-img-top" alt=""/>
                <p className="text">{ category.title }</p>
            </div>
            <div className="card-product">
                <h5 className="title">{ title }</h5>
                <div className="container-teacher-name">
                    <h3 className="teacher-title">Prof: { teacher.user.nombre } { teacher.user.apellidos }</h3>
                    <p className="m-0"><i className="fas fa-star"></i> { stars.toFixed(2) }</p>
                </div>
                <div className="container-btn">
                    <a href="#" className="btn-product btn-carrito">Agregar al carrito</a>
                    <a href="#" className="btn-product">Comprar</a>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

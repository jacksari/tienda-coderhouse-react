import React from 'react';

function Item({product}) {
    console.log(product)
    const {title, img, category} = product;
    return (
        <div className="card my-2" style={{width: '18rem'}}>
            <img src={img.url} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ category.title }</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
}

export default Item;

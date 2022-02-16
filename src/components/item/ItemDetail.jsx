import React, {useContext, useEffect, useState} from 'react';
import {
    Link
} from "react-router-dom";
import ItemCount from "../counter/ItemCount";
import cartContext from "../../context/cart/cartContext";
import productContext from "../../context/product/productContext";


const ItemDetail = ({product}) => {
    const { title, image, category, teacher, stars, id, price, stock, slug } = product;
    const { addItem } = useContext(cartContext);
    const [nameCategory, setNameCategory] = useState(null);

    const { categories } = useContext(productContext);

    const addCart = (value) => {
        console.log(`Se agregó al carrito ${value} unidades del producto ${title}`)
        addItem(product, value)
    }
    useEffect(() => {
        if(category){
            let cat = categories.filter(categoryItem => categoryItem.id === category)[0];
            setNameCategory(cat.name)
        }
    }, [category]);

    return (
        <>
            <div  className="item-product">
                <div className="container-image">
                    <Link to={`/productos/${slug}`} className=" link">
                        <img src={image} className="card-img-top" alt=""/>
                        <p className="text">{ nameCategory }</p>
                    </Link>
                </div>
                <div className="card-product">
                    <Link to={`/productos/${id}`} className="title">{ title }</Link>
                    <div className="container-teacher-name">
                        <h3 className="teacher-title">Prof: { teacher }</h3>
                        <p className="m-0"><i className="fas fa-star"/> { stars }</p>
                    </div>
                    <div className="container-btn">
                        <button type="button" className="btn-product btn-carrito">Agregar al carrito</button>
                        <button type="button" className="btn-product">Comprar ${ price }</button>
                    </div>
                </div>
            </div>

            <ItemCount initial={0} stock={stock} onAdd={addCart}/>
        </>
    );
}

export default ItemDetail;

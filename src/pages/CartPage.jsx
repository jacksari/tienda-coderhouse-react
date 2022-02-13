import React, {useContext} from 'react';
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Layout from "../components/layout/Layout";
import cartContext from "../context/cart/cartContext";
import CartItem from "../components/item/CartItem";
import {Link} from "react-router-dom";

function CartPage(props) {
    const { carts, clear, cartCount, totalPrice } = useContext(cartContext);
    return (
        <Layout>
            <TitlePage title="Página de carrito"/>
            <Breadcrumb title="Carrito" page="/cart"/>
            <div>
                <button onClick={()=>clear()} type="button" className="btn btn-info">Eliminar todos los items</button>
            </div>
            <div className="container my-4">
                {
                    carts.length > 0 ? <>
                        {
                            carts.map((cart, index) => (
                                <CartItem cart={cart} key={index}/>
                            ))
                        }
                        <div className="my-2 d-flex justify-content-between align-items-center border-bottom">
                            <div>
                                <h3>Total:</h3>
                                <div className="d-flex align-items-center">
                                    <p className="mr-2">Cantidad: { cartCount } unidades</p>
                                    <p>Precio: { totalPrice } USD</p>
                                </div>
                            </div>
                            <button type="button"  className="btn btn-success">Pagar</button>
                        </div>
                    </> : <div className="mt-4">
                        <h4>Sin items en el carrito</h4>
                        <Link className="btn btn-carrito mt-4" to="/productos" >Ver productos</Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

export default CartPage;

import React, {useContext, useState, useEffect} from 'react';
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Layout from "../components/layout/Layout";
import cartContext from "../context/cart/cartContext";
import CartItem from "../components/item/CartItem";
import {Link} from "react-router-dom";
import FormCheckOut from "../components/item/FormCheckOut";

function CartPage() {
    const { carts, clear, cartCount, totalPrice, initCheckOut, checkoutSuccess } = useContext(cartContext);
    const [formSuccess, setFormSuccess] = useState(false);
    useEffect(() => {
        initCheckOut()
    }, []);

    return (
        <Layout>
            <TitlePage title="Página de carrito"/>
            <Breadcrumb title="Carrito" page="/cart"/>
            {
                !formSuccess ? <>
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
                                    <button onClick={()=>setFormSuccess(true)} type="button"  className="btn btn-success">Pagar</button>
                                </div>
                            </> : <div className="mt-4">
                                <h4>Sin items en el carrito</h4>
                                <Link className="btn btn-carrito mt-4" to="/productos" >Ver productos</Link>
                            </div>
                        }
                    </div>
                </> : <div className="container my-4">
                    <FormCheckOut/>
                </div>
            }

        </Layout>
    );
}

export default CartPage;

import React, {useContext} from 'react';
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Layout from "../components/layout/Layout";
import cartContext from "../context/cart/cartContext";
import CartItem from "../components/item/CartItem";

function CartPage(props) {
    const { carts, clear } = useContext(cartContext);
    return (
        <Layout>
            <TitlePage title="Página de carrito"/>
            <Breadcrumb title="Carrito" page="/cart"/>
            <div>
                <button onClick={()=>clear()} type="button" className="btn btn-info">Eliminar todos los items</button>
            </div>
            <div className="container my-4">
                {
                    carts.length > 0 ? carts.map((cart, index) => (
                        <CartItem cart={cart} key={index}/>
                    )) : <div className="mt-4">
                        <h4>Sin items en el carrito</h4>
                    </div>
                }
            </div>
        </Layout>
    );
}

export default CartPage;

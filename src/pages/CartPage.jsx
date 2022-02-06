import React from 'react';
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import Layout from "../components/layout/Layout";

function CartPage(props) {
    return (
        <Layout>
            <TitlePage title="Página de carrito"/>
            <Breadcrumb title="Carrito" page="/cart"/>
            <div className="container">
                <h5>Agregar página de carrito</h5>
            </div>
        </Layout>
    );
}

export default CartPage;

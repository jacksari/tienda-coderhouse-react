import React from 'react';
import Layout from "../components/layout/Layout";
import ItemDetailContainer from "../components/item/ItemDetailContainer";
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";

function ProductIndexPage(props) {
    return (
        <Layout>
            <TitlePage title="Página productos"/>
            <Breadcrumb title="Productos" page="/productos"/>
            <ItemDetailContainer/>
        </Layout>
    );
}

export default ProductIndexPage;

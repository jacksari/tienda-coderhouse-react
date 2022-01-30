import React from 'react';
import Layout from "../components/layout/Layout";
import ItemDetailContainer from "../components/item/ItemDetailContainer";
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";
import CategoryContainer from "../components/category/CategoryContainer";

function IndexPage(props) {
    return (
        <Layout>

            <Breadcrumb title="Home" page="/"/>
            <TitlePage title="Categorías"/>
            <CategoryContainer/>
            <TitlePage title="Productos"/>
            <ItemDetailContainer/>
        </Layout>
    );
}

export default IndexPage;

import React from 'react';
import Layout from "../components/layout/Layout";
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";

function ContactoPage() {
    return (
        <Layout>
            <TitlePage title="Página de contacto"/>
            <Breadcrumb title="Contacto" page="/contacto"/>
            <div className="container">
                <h5>Agregar página de contacto</h5>
            </div>
        </Layout>
    );
}

export default ContactoPage;

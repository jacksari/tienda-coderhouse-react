import React from 'react';
import Layout from "../components/layout/Layout";
import TitlePage from "../components/layout/TitlePage";
import Breadcrumb from "../components/layout/Breadcrumb";

function ContactoPage() {
    return (
        <Layout>
            <TitlePage title="Página de contacto"/>
            <Breadcrumb title="Contacto" page="/contacto"/>
        </Layout>
    );
}

export default ContactoPage;

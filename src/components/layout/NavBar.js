import React from 'react';
import CartWidget from "../lecciones-curso/CartWidget";
import Logo from '../../logo.svg';
import ItemNavLink from "./ItemNavLink";

import {
    Link
} from "react-router-dom";
import DropCategories from "./DropCategories";


function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="/">
                    <img style={{height: '30px'}} src={Logo} alt="Logo React"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <ItemNavLink active title="Home"/>
                        <ItemNavLink  title="Productos" url={'/productos'}/>
                        <ItemNavLink  title="Categorías" url={'/categorias'}/>
                        <ItemNavLink  title="Contacto" url={'/contacto'}/>
                        <ItemNavLink  title="Carrito" url={'/cart'}/>
                        <DropCategories/>
                    </ul>
                    <CartWidget/>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Nombre de producto" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

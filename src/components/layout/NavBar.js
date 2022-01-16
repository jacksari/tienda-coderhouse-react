import React from 'react';
import CartWidget from "../CartWidget";
import Logo from '../../logo.svg';
import ItemNavLink from "./ItemNavLink";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img style={{height: '30px'}} src={Logo} alt="Logo React"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <ItemNavLink active title="Home"/>
                        <ItemNavLink  title="Productos" url={'/productos'}/>
                        <ItemNavLink  title="Contacto" url={'/contacto'}/>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Categorías
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Categoría 1</a></li>
                                <li><a className="dropdown-item" href="#">Categoría 2</a></li>

                                <li><a className="dropdown-item" href="#">Categoría 3</a></li>
                            </ul>
                        </li>
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

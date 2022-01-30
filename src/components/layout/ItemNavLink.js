import React from 'react';
import {
    Link
} from "react-router-dom";

function ItemNavLink({active = false, title, url = '/'}) {
    return (
        <li className="nav-item">
            <Link className={`nav-link ${active ? 'active' : ''}`} to={url}>{ title }</Link>
        </li>
    );
}

export default ItemNavLink;

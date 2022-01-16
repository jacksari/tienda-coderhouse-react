import React from 'react';

function ItemNavLink({active = false, title, url = '/'}) {
    return (
        <li className="nav-item">
            <a className={`nav-link ${active ? 'active' : ''}`} aria-current="page" href={url}>
                { title }
            </a>
        </li>
    );
}

export default ItemNavLink;

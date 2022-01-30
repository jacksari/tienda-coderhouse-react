import React from 'react';
import {
    Link
} from "react-router-dom";

function Breadcrumb({page, title}) {
    return (
        <div className="container breadcrumb">
            <Link className="" to={'/'}>Home</Link>
            <p>/</p>
            <Link className="link" to={page}>{ title }</Link>
        </div>
    );
}

export default Breadcrumb;

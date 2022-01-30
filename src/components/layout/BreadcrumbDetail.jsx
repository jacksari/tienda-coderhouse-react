import React from 'react';
import {
    Link
} from "react-router-dom";

function BreadcrumbDetail({page, title, module, moduleUrl}) {
    return (
        <div className="container breadcrumb">
            <Link className="" to={'/'}>Home</Link>
            <p>/</p>
            <Link className="" to={page}>{ title }</Link>
            <p>/</p>
            <Link className="link" to={moduleUrl}>{ module }</Link>
        </div>
    );
}

export default BreadcrumbDetail;

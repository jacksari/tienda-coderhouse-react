import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <>
            <NavBar/>
            <div className="container">
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Layout;

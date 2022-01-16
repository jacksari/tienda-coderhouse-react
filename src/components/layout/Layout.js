import React from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({children}) {
    return (
        <>
            <NavBar/>
            <div className="container my-4">
                {children}
            </div>
            <Footer/>
        </>
    );
}

export default Layout;

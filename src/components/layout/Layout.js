import React, {useContext, useEffect} from 'react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import productContext from "../../context/product/productContext";

function Layout({children}) {
    const { getCategories, getProducts } = useContext(productContext);
    useEffect(() => {
        getCategories()
        getProducts()
    }, []);
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

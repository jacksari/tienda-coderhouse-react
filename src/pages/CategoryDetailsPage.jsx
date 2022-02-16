import React, {useContext, useEffect, useState} from 'react';
import TitlePage from "../components/layout/TitlePage";
import Layout from "../components/layout/Layout";
import BreadcrumbDetail from "../components/layout/BreadcrumbDetail";
import {useLocation} from "react-router-dom";
import CoursesForCategory from "../components/category/CoursesForCategory";
import productContext from "../context/product/productContext";

function CategoryDetailsPage() {
    const router = useLocation();
    const [category, setCategory] = useState(null);

    const { categories, getProductByCategory } = useContext(productContext);

    useEffect(() => {
        if(router.pathname.replace('/categorias/','')){
            let id = router.pathname.replace('/categorias/','');
            setCategory(categories.filter(categoryItem => categoryItem.id == id)[0])
            getProductByCategory(id)
        }

    }, [router.pathname.replace('/categorias/',''), categories])


    return (
        <Layout>
            <TitlePage title="Página categoría detalle"/>
            {
                category && <BreadcrumbDetail title="Categoría" page="/categorias" module={category.name} moduleUrl={`/categorias/${category.id}`}/>
            }
            <div className="container">
                <h5>Cursos de la categoría { category && category.name }</h5>
                {
                    category && <CoursesForCategory/>

                }
            </div>
        </Layout>
    );
}

export default CategoryDetailsPage;

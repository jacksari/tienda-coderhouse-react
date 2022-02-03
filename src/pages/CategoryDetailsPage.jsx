import React, {useEffect, useState} from 'react';
import TitlePage from "../components/layout/TitlePage";
import Layout from "../components/layout/Layout";
import BreadcrumbDetail from "../components/layout/BreadcrumbDetail";
import {useLocation} from "react-router-dom";
import CoursesForCategory from "../components/category/CoursesForCategory";
import fetchCategoryById from "../config/api";

function CategoryDetailsPage() {
    const router = useLocation();
    const [category, setCategory] = useState(null);
    useEffect(() => {
        (async ()=> {
            const data = await fetchCategoryById(router.pathname.replace('/categorias/',''));
            console.log(data.category)
            setCategory(data.category);
        })()
    }, [router.pathname.replace('/categorias/','')]);


    return (
        <Layout>
            <TitlePage title="Página categoría detalle"/>
            {
                category && <BreadcrumbDetail title="Categoría" page="/categorias" module={category.title} moduleUrl={category.title}/>
            }
            <div className="container">
                <h5>Cursos de la categoría { category && category.title }</h5>
                {
                    category && <CoursesForCategory category={category.uid}/>

                }
            </div>
        </Layout>
    );
}

export default CategoryDetailsPage;

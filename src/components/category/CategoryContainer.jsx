import React from 'react';
import CategoryItem from "./CategoryItem";
import FetchHooks from "../../hooks/fetchHooks";

function CategoryContainer(props) {
    const { data, loading, error } = FetchHooks('https://service.dened.org/api/categories');
    return (
        <div className="container">
            {
                !loading ? <div className=" grid-categories my-4">
                    {
                        data.categories.map((category, index) => (
                            <CategoryItem key={index} category={category}/>
                        ))
                    }
                </div> : <div className="mt-4">
                    <h2>Cargando...</h2>
                </div>
            }
        </div>
    );
}

export default CategoryContainer;

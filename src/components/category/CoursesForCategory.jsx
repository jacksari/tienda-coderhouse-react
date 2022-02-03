import React, { useEffect, useState } from 'react';
import FetchHooks from "../../hooks/fetchHooks";
import ItemDetail from "../item/ItemDetail";

function CoursesForCategory({category}) {
    const { data, loading, error } = FetchHooks('https://service.dened.org/api/courses/public?page=1&limit=20');
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        if(data.courses){
            //console.log(data.courses.docs)
            const cursos = data.courses.docs.filter(curso => curso.category._id == category)
            setCourses(cursos);
        }
    }, [data, category]);

    return (
        <div className="">
            {
                !loading ? <div className="grid-products my-4">
                    {
                        courses.length > 0 ? courses.map((product, index) => (
                            <ItemDetail key={index} product={product}/>
                        )) : <div className="mt-4">
                            <h4>Sin cursos</h4>
                        </div>
                    }
                </div> : <div className="my-4">
                    <h2>Cargando...</h2>
                </div>
            }
        </div>
    );
}

export default CoursesForCategory;

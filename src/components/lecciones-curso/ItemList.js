import React from 'react';
import FetchHooks from "../../hooks/fetchHooks";
import Item from "./Item";

function ItemList(props) {
    const { data, loading, error } = FetchHooks('https://service.dened.org/api/courses/public?page=1&limit=6}');
    return (
        <div>
            {
                !loading ? data.map((product, index) => (
                    <Item key={index} product={product}/>
                )) : (
                    <div>
                        <p className="text-danger fs-3 fw-bolder">Cargando datos...</p>
                    </div>
                )
            }
        </div>
    );
}

export default ItemList;

import React from 'react';
import FetchHooks from "../hooks/fetchHooks";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer(props) {
    // Peticion al servidor
    const { data, loading, error } = FetchHooks('https://service.dened.org/api/courses/public?page=1&limit=8}');
    return (
        <div className="container">
            <div className="pt-4">
                <h2 className="">Productos</h2>
            </div>
            {
                !loading ? <div className="grid-products my-4">
                    {
                        data.map((product, index) => (
                            <ItemDetail key={index} product={product}/>
                        ))
                    }
                </div> : <div className="mt-4">
                    <h2>Cargando...</h2>
                </div>
            }
        </div>
    );
}

export default ItemDetailContainer;

import React, {useContext} from 'react';
import FetchHooks from "../../hooks/fetchHooks";
import ItemDetail from "./ItemDetail";
import productContext from "../../context/product/productContext";

function ItemDetailContainer(props) {
    // Peticion al servidor
    const { products } = useContext(productContext);
    return (
        <div className="container">
            {
                 <div className="grid-products my-4">
                    {
                        products.map((product, index) => (
                            <ItemDetail key={index} product={product}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default ItemDetailContainer;

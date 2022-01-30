import React, { useState } from 'react';
import ItemCount from "../counter/ItemCount";
import ItemList from "./ItemList";

function ItemListContainer({title}) {

    const [cart, setCart] = useState([]);
    return (
        <div>
            <div className="row row-cols-2">
                <div className="col">
                    <h2 className="mb-4">{title}</h2>
                    <ItemList/>
                </div>
                <div className="col">
                    <h2 className="mb-4">Carrito de compras</h2>

                    <ItemCount initial={1} stock={5} onAdd={setCart} cart={cart}/>
                    <ItemCount initial={3} stock={10} onAdd={setCart} cart={cart}/>
                    <ItemCount initial={2} stock={0} onAdd={setCart} cart={cart}/>

                    {
                        cart.map((product, index) => (
                            <p>Producto {index + 1}: {product} unidades</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;

import React, { useState } from 'react';
import ItemCount from "./counter/ItemCount";

function ItemListContainer({title}) {
    const [cart, setCart] = useState([]);
    return (
        <div>
            <h2>{title}</h2>

            <ItemCount initial={1} stock={5} onAdd={setCart} cart={cart}/>
            <ItemCount initial={3} stock={10} onAdd={setCart} cart={cart}/>
            <ItemCount initial={2} stock={0} onAdd={setCart} cart={cart}/>

            {
                cart.map((product, index) => (
                    <p>Producto {index + 1}: {product} unidades</p>
                ))
            }
        </div>
    );
}

export default ItemListContainer;

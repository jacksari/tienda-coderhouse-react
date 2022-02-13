import React, {useContext} from 'react';
import cartContext from "../../context/cart/cartContext";

function CartItem({cart}) {
    const { removeItem } = useContext(cartContext);
    const { item, quantity } = cart
    return (
        <div className="my-2 d-flex justify-content-between align-items-center border-bottom">
            <div>
                <h3>{ item.title }</h3>
                <div className="d-flex align-items-center">
                    <p className="mr-2">Cantidad: { quantity }</p>
                    <p>Precio: { item.price }</p>
                </div>
            </div>
            <button type="button" onClick={()=>removeItem(item.uid)} className="btn btn-danger">Eliminar item</button>
        </div>
    );
}

export default CartItem;

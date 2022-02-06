import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

function ItemCount({ stock = 0, initial, onAdd }) {
    const [value, setValue] = useState(initial);
    const [cartSuccess, setCartSuccess] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="my-4">
            <p>STOCK: {stock}</p>
            <div className="input-group my-2 text-center">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={()=>{
                        if(value > 0){
                            setValue(value - 1 )
                        }
                    }}
                >-1</button>
                <p className="d-flex justify-content-center align-items-center border border-top border-bottom" style={{width: '100px', margin: '0'}}>
                    { value }
                </p>
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={()=> {
                        if(value < stock){
                            setValue(value + 1 )
                        } else {
                            setValue(value)
                        }
                    }}
                >+1</button>
            </div>
            {
                !cartSuccess ? (
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={()=>{
                            if(stock !== 0 && value > 0) {

                                onAdd(value)
                                setCartSuccess(true)
                            }
                        }}
                    >Agregar al carrito</button>
                ) : (
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={()=>{
                            // redireccionar al path /cart
                            navigate('cart')
                        }}
                    >Finalizar compra</button>
                )
            }

        </div>
    );
}

export default ItemCount;

import React, { useState } from 'react';

function ItemCount({ stock = 0, initial, onAdd, cart }) {
    const [value, setValue] = useState(initial);
    return (
        <div className="my-4">
            <p>STOCK: {stock}</p>
            <div className="input-group my-2">
                <button
                    className="btn btn-outline-primary"
                    type="button"
                    onClick={()=>{
                        if(value > 0){
                            setValue(value - 1 )
                        }
                    }}
                >-1</button>
                <p className="d-flex justify-content-center align-items-center border border-top border-bottom" style={{width: '200px', margin: '0'}}>
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
            <button
                className="btn btn-primary"
                type="button"
                onClick={()=>{
                    if(stock !== 0) {
                        onAdd([...cart, value])
                    }
                }}
            >Agregar al carrito</button>

        </div>
    );
}

export default ItemCount;

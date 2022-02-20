import React, {useState, useContext} from 'react';
import cartContext from "../../context/cart/cartContext";
import * as firebase from 'firebase/app';
import {
    Link
} from "react-router-dom";

function FormCheckOut() {
    const { carts, totalPrice, createOrder, checkoutSuccess } = useContext(cartContext);
    const [buyer, setBuyer] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const actualizarState = e => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const submitFormCheckOut = () => {

        if(buyer.name && buyer.phone && buyer.email){
            const order = {
                buyer,
                items: carts.map(cart => {
                    return {
                        id: cart.item.id,
                        title: cart.item.title,
                        price: cart.item.price
                    }
                }),
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: totalPrice
            };
            createOrder(order, carts)
        } else{
            console.log('debe ingresar datos del usuario')
        }
    }
    return (
        <div>
            {
                !checkoutSuccess ? <>
                    <h2>Datos de usuario</h2>
                    <div className="row">
                        <div className="col-4 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre:</label>
                            <input value={buyer.name} name="name" onChange={actualizarState} type="text" className="form-control" id="name"
                                   placeholder="Your name"/>
                        </div>
                        <div className="col-4 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Teléfono:</label>
                            <input value={buyer.phone} name="phone" onChange={actualizarState} type="text" className="form-control" id="phone"
                                   placeholder="Your phone"/>
                        </div>
                        <div className="col-4 mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
                            <input value={buyer.email} name="email" onChange={actualizarState} type="email" className="form-control" id="email"
                                   placeholder="name@example.com"/>
                        </div>
                    </div>
                    <button type="button" onClick={submitFormCheckOut} className="btn btn-primary">
                        Comprar por { totalPrice.toFixed(2) } USD
                    </button>
                </> : <>
                    <h2>Pago exitoso</h2>
                    <Link className="btn btn-success mt-4" to="/ordenes" >Ir a ordenes</Link>

                </>
            }
        </div>
    );
}

export default FormCheckOut;

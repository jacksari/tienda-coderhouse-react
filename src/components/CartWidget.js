import React from 'react';

function CartWidget() {
    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-light mx-2">
                <i className="fas text-success fa-cart-plus fa-lg"/>
            </button>
        </div>
    );
}

export default CartWidget;

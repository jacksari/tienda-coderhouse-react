import React, {useContext} from 'react';
import ItemDetail from "../item/ItemDetail";
import productContext from "../../context/product/productContext";

function CoursesForCategory({}) {

    const { products } = useContext(productContext);



    return (
        <div className="">
            {
                <div className="grid-products my-4">
                    {
                        products.length > 0 ? products.map((product, index) => (
                            <ItemDetail key={index} product={product}/>
                        )) : <div className="mt-4">
                            <h4>Sin cursos</h4>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default CoursesForCategory;

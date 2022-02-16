import React, {useContext} from 'react';
import CategoryItem from "./CategoryItem";
import FetchHooks from "../../hooks/fetchHooks";
import productContext from "../../context/product/productContext";

function CategoryContainer() {
    const { categories } = useContext(productContext);
    return (
        <div className="container">
            {
                <div className=" grid-categories my-4">
                    {
                        categories.map((category, index) => (
                            <CategoryItem key={index} category={category}/>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default CategoryContainer;

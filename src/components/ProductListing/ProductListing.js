import React from 'react';
import { useSelector } from "react-redux";
import ProductComponent from '../ProductComponent/ProductComponent';

const ProductListing = () => {
    const products = useSelector((state) => state);
    console.log(products);
    return (
        <div>
            <h1>ProductListing</h1>
            <ProductComponent />
        </div>
    )
}

export default ProductListing

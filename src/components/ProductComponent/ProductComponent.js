import React from 'react';
import { useSelector } from "react-redux";
import { Card } from '@material-ui/core';

const ProductComponent = () => {
    const products = useSelector((state) => state.allproducts.products);
    const { id, title } = products[0];
    return (
        <div>
            <h1>ProductComponent</h1>
            <Card>{title}</Card>
        </div>
    )
}

export default ProductComponent

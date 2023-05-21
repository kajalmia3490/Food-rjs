import React from 'react';

const Product = (props) => {
    return (
        <div className='border rounded p-5 w-full mt-3 mb-5'>
            <h1 className='font-bold text-xl font-sans'> {props.name} </h1>
            <p> {props.img} </p>
            <p>Your product</p>
            <button
                className='rounded p-2 bg-amber-400 mt-3'
            >
                Go to category
            </button>
        </div>
    );
};

export default Product;
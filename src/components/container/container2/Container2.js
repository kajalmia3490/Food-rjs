import React from 'react';
import './Container2.css'
import Product from './product/Product';

const Container2 = (props) => {
    return (
        <div className='mx-20'>
            <div className='flex justify-between mt-10 font-sans'>
                <div>
                    <h1 className='text-4xl font-bold'>Love our catergories</h1>
                </div>
                <div className='rounded bg-amber-400 p-2'>Show more catergories >></div>
            </div>

            <div className='flex justify-around gap-5'>
                <Product name='Cake'  />
                <Product name='Vegetable' />
                <Product name='Fruits' />
                <Product name='All products' />
            </div>
        </div>
    );
};

export default Container2;
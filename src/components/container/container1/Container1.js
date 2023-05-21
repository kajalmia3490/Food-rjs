import React from 'react';
import './Container1.css'

const Container1 = () => {
    return (
        <div>
            <div style={{
                backgroundImage: `url('https://opencart.workdo.io/grocery/image/cache/catalog/slider/2-1920x583.jpg')`,
                width: '100%',
                height: '400px'
            }} alt='...'>

                <h1 className='text-4xl font-serif font-bold text-center pt-20'>Welcome to My Foody Shop</h1>

                <p className='text-xl font-bold mt-5 text-justify mr-72 ml-10 font-sans'>
                    There are various kinds of foods. Everything is so much delicious and teste. Many people comes here for dinner & hangout. More an other special service is Online Order.  Actually, Our services are very unique from other shop.
                </p>

                <p className='w-full text-center mt-5'>
                    <button
                        className='rounded bg-amber-400 p-2 font-bold font-sans'>
                        Show Products
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Container1;
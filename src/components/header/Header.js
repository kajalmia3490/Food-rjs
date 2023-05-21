import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div className='bg-purple-600 py-5'>
            <ul className='ml-10 flex'>
                <li>
                    <h1 className='font-bold text-4xl text-white'>
                        <strong className='font-serif text-yellow-400'>Junk</strong>
                        Foods</h1>
                </li>
                <li className='text-white font-bold mr-10'>
                    <p>Monday - Friday</p>
                    <p>8.00am - 9.00pm</p>
                </li>
                <li className='flex'>
                    <div>
                        <input
                            className='w-full rounded border-gray-300 p-2 pr-20'
                            type='search'
                            placeholder='Search your foods'
                            name='text'
                        />
                    </div>
                    <div className='ml-2'>
                        <select className='rounded'>
                            <option value='Categories'>Catergories</option>
                            <option value='all product'>All Product</option>
                            <option value='Herbs & Green leaves'>Herbs & Green leaves</option>
                            <option value='Date & Beans'>Date & Beans</option>
                            <option value='Cake'>Cake</option>
                            <option value='Bread'>Bread</option>
                            <option value='Fruits'>Fruits</option>
                            <option value='spicy puff'>Spicy puff</option>
                        </select>
                    </div>
                </li>
                <li className='text-white'>
                    <p>Support 24/7</p>
                    <p className='font-bold text-xl'>+880 1949146285</p>
                </li>
                <li className='mr-5'>
                    <i class="fa-regular fa-user text-2xl text-white"></i>
                </li>
                <li>
                    <i class="fa-regular fa-heart text-white text-2xl"></i>
                </li>
                <li>
                    <p className='font-bold text-white'>
                        Addcart <sup className='bg-white text-black p-1 rounded-xl px-2'> {props.cart}</sup>
                    </p>
                </li>
            </ul>
            <nav className='mt-2'>
                <ul className='flex ml-20'>
                    <li>
                        <select className='rounded bg-amber-400 p-2 px-5'>
                            <option value='Categories'>Catergories</option>
                            <option value='all product'>All Product</option>
                            <option value='Herbs & Green leaves'>Herbs & Green leaves</option>
                            <option value='Date & Beans'>Date & Beans</option>
                            <option value='Cake'>Cake</option>
                            <option value='Bread'>Bread</option>
                            <option value='Fruits'>Fruits</option>
                            <option value='spicy puff'>Spicy puff</option>
                        </select>
                    </li>
                    <li className='text-white ml-20 mb-0'>
                        <label className='text-amber-400'>-30% off </label>
                        for first order with 200 USD in the cart.
                        <a href='#' className='underline hover:text-amber-400'>show more</a>
                    </li>
                    <li className='ml-24 text-white'>
                        <a href='#' className='underline hover:text-amber-400'>FAQ</a>
                    </li>
                    <li className='text-white'>
                        <a href='#' className='underline hover:text-amber-400'>About U</a>
                    </li>
                    <li className='text-white'>
                        <a href='#' className='underline hover:text-amber-400'>Privacy Policy</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
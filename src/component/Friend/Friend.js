import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = () => {
    return (
        <div>
            <nav>
                
                   
                    <Link className='red'  to="/about">about</Link>
                    <Link className='red' to="/blog">blog</Link>
                    <Link className='red' to="/">Home</Link>
                    <Link className='red' to="/post">post</Link>
                    {/* <Link className='red' to="/links">link</Link>className='red'  */}
                    <Link className='red' to="/hack">hack</Link>
               
            </nav>
        </div>
    );
};

export default Friend;
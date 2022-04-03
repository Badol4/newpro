import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [facebook,setFacebook] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setFacebook(data))
        console.log(facebook);
    },[])
    return (
        <div>
            <h1>every post facebook ever had {facebook.length} </h1>
            {
                facebook.map(facebook => <Link to={`/post/:${facebook.id}`} >{facebook.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;
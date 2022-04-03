import React, { useEffect, useState } from 'react';
import Links from '../link/Link';

const Home = () => {
    const [post,setPost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    return (
        <div>
            <h1>this is all my friend this kind of website</h1>
            {
                post.map(post => <Links data ={post}></Links>)
            }
        </div>
    );
};

export default Home;
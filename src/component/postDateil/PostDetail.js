import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams()
    console.log(postId);
    const [posts, setPost] = useState({})
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <h1>this is post datails {postId} </h1>
            <h3>name:{posts.title} </h3>
            <h2>{posts.body}</h2>
        </div>
    );
};

export default PostDetail;
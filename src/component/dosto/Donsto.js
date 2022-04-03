import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Donsto = () => {
    const perams = useParams()
    const {donstoId} = perams
    const [freind, setFreind] = useState({})
    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users/${donstoId}`)
        .then(res => res.json())
        .then(data => setFreind(data))
    },[])
    return (
        <div>
            <h1>this is about dosto: {donstoId}</h1>
            <h2>Name:{freind.name}</h2>
            <h3>email:{freind.email}</h3>
        </div>
    );
};

export default Donsto;
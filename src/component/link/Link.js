import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from '../home/Home';
import './link.css'

const Links = (props) => {
    const {userId,id,title} = props.data
    console.log(props);
    const navigate = useNavigate()
    const handelClick = () => {
        navigate('/Donsto/' + id)
    }
   
    
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handelClick}>about me {id}</button>
        </div>
    );
};

export default Links;
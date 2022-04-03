
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './component/home/Home';
import Links from './component/link/Link';
import Friend from './component/Friend/Friend';
import About from './component/about/About';
import Blog from './component/blog/Blog';
import Hack from './component/hack/hack';
import FriendInfo from './component/FriendDetile/FriendInfo';
import Donsto from './component/dosto/Donsto';
import { useState } from 'react';
import Post from './component/Post/Post';
import PostDetail from './component/postDateil/PostDetail';

function App() {
  return (
    <div className="App">
      <Friend></Friend>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/links' element={<Links></Links>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/hack' element={<Hack />}></Route>
        <Route path='/FriendInf/:id' element={<FriendInfo />}></Route>
        <Route path='/post' element={<Post></Post>}>
          <Route path='/post:/postId' element={<PostDetail></PostDetail>}></Route>
        </Route>
        <Route path='/donsto/:donstoId' element={<Donsto></Donsto>}></Route>
      </Routes>
    </div>
  );
}

export default App;












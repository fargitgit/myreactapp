import React from 'react';
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Error from './Error';
import User from './User';
import Navbar from "./Navbar";
import Search from "./Search";
import { Routes, Route, Navigate } from 'react-router-dom';

const RouterApp = () =>{
    return (
        <>  
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/user/:fname/:lname" element={<User />} />
                <Route path="/search" element={<Search />} />
                {/* <Route path="*" element={<Error />} /> */}
                <Route path="*" element={<Navigate to ="/" />} />
            </Routes>
        </>
    );
}

export default RouterApp;
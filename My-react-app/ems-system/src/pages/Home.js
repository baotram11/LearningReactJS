import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1> This is the Home page! </h1>
            <Link to="/about"> About </Link>
            <Link to="/products"> Products </Link>
            <Link to="/hello"> Hello </Link>
        </div>
    );
};

export default Home;
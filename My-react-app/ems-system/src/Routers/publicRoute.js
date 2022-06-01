import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Catalog from "../Pages/Catalog";
import Detail from "../Pages/Detail";
import About from "../Pages/About";

const Router = () => {
    return (
        <Routes>
            <Route path="/:category/search/:keyword" element={<Catalog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/about" element={<About />} />            
            <Route path="/" exact element={<Home />} />
        </Routes>
    );
};

export default Router;
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Pages/Gallery";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Gallery from "./Pages/Gallery";
import Programs from "./Pages/Programs";
import Events from "./Pages/Events";
import NotFound404 from "./Pages/NotFound404";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/events" element={<Events />} />
                <Route path="/*" element={<NotFound404 />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;

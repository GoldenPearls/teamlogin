import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routers/Home";
import Festival from "./routers/Festival/Festival";
import Recommend from "./routers/Recommend/Recommend";
import Community from "./routers/Community/Community";
import Navigation from "./components/nav/Navigation";
import Login from "./routers/Login/Login";
import { AuthProvider } from "./routers/Login/AuthContext";

function App() {
    return (
        <Router>
            <AuthProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/festival" element={<Festival />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/community" element={<Community />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;

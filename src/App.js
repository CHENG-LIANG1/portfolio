import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            {/* <Particles options={particlesOptions} init={particlesInit}/> */}
            <BrowserRouter>
                <Routes>
                    <Route path="/"  element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

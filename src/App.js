import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/home';
import NavigationBar from './components/Nav/navbar';
import Detail from './components/Detail/detail';
import Project from './components/Project/Project';
import Navbar from './components/Nav/nav';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    const setCurrentPage = (props) => {
        console.log(props)
    }

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>

            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/"  element={<Home />} />
                    <Route path="/detail"  element={<Detail />} />
                    <Route path="/project"  element={<Project />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

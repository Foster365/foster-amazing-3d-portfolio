import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Home, About, Projects, Contact, ChronoSteam, Art} from './pages/index';

const App = () => {
  return (
    <main className = ''>
        <Router>
            <Routes>
                <Route path="/foster-amazing-3d-portfolio/" element = {<Home/>} />
                <Route path="/about" element = {<About/>} />
                <Route path="/projects" element = {<Projects/>} />
                <Route path="/art" element = {<Art/>} />
                <Route path="/chrono-steam" element = {<ChronoSteam/>} />
                <Route path="/contact" element = {<Contact/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import {Home, About, Projects, Contact} from './pages/index';

const App = () => {
  return (
    <main className = 'bg-blue-200/5 h-full'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element = {<Home/>} />
                <Route path="/about" element = {<About/>} />
                <Route path="/projects" element = {<Projects/>} />
                <Route path="/contact" element = {<Contact/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App
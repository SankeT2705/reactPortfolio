import React from 'react'
import Navbar from './navbar'
import Home from './home'
import About from './about'
import Project from './project'
import Contacts from './contacs'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/project" element={<Project />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                </Routes>
                <footer class="bg-dark text-white fixed-bottom py-3">
                    <div class="container text-center">
                        <p>&copy; 2023 Sanket Bobhate</p>
                    </div>
                </footer>
            </Router>
        </div>
    )
}

export default App
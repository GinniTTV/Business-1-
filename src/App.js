import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Alta from './components/alta';
import Contacto from './components/contacto';
import Nosotros from './pages/nosotros';
import Inicio from './pages/Inicio';
import validations from './helpers/validations';


import './styles/main.scss';


const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/alta" element={<Alta />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/" element={<Inicio />} />
            </Routes>
        </Router>
    );
}

export default App;







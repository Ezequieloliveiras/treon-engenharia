import React from "react"

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"

import Sobre from "./pages/sobre/Sobre";
import Inicio from "./pages/inicio/Inicio";
import TemplateDefault from './templates/Default'

function App() {
    return (
        <TemplateDefault>
            <Router>
                <Routes>
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/" element={<Inicio />} />
                </Routes>
            </Router>
        </TemplateDefault>
    )
}

export default App 
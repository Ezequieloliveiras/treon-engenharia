import React from "react"

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"

import Sobre from "./pages/Sobre";
import Inicio from "./pages/Inicio";
import TemplateDefault from './templates/Default'


// componente react = funcao js que retorna JSX
function App() {
    return ( // JSX dentro do return
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

export default App // syntax sugar
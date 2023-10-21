import React from "react"

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"

import Users from "./pages/Users";
import Home from "./pages/Home";



// componente react = funcao js que retorna JSX
function App() {
    return ( // JSX dentro do return
        <Router>
            <Routes>
                <Route path="/users" element={<Users />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App // syntax sugar
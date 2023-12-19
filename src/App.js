import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"

import About from "./pages/about/About"
import Home from "./pages/home/Home"
import TemplateDefault from './templates/Default'
import Contact from './pages/contact/Contact'
import Pmoc from './pages/pmoc/Pmoc'
import PrevencaoIncendio from './pages/prevencao_incendio/Prevencao_incendio'
import LaudoArcondicionado from "./pages/laudo_ar_condicionado/Laudo_ar_condicionado"
import LaudoPpci from './pages/laudo_ppci/Laudo_ppci'
import LaudoMaquinas from "./pages/laudo_ppci copy/Laudo_maquinas"

function App() {
    return (
        <TemplateDefault>
            <Router>
                <Routes>
                    <Route path="/laudo_tecnico_maquinas_pesadas" element={<LaudoMaquinas />} />
                    <Route path="/laudo_tecnico_ppci" element={<LaudoPpci />} />
                    <Route path="/laudo_tecnico_ar_condicionado" element={<LaudoArcondicionado />} />
                    <Route path="/prevencao_a_incendio" element={<PrevencaoIncendio />} />
                    <Route path="/pmoc" element={<Pmoc />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </TemplateDefault>
    )
}

export default App 
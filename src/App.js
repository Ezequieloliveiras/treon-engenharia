import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import TemplateDefault from './templates/Default'
import Pmoc from './pages//services/pmoc/Pmoc'
import PrevencaoIncendio from './pages/services/prevencao_incendio/Prevencao_incendio'
import LaudoArcondicionado from "./pages/services/laudo_ar_condicionado/Laudo_ar_condicionado"
import LaudoPpci from './pages/services/laudo_ppci/Laudo_ppci'
import LaudoMaquinas from "./pages/services/laudo_maquinas/Laudo_maquinas"
import Alvara from './pages/services/alvara_de_funcionamento/Alvara'
import ProjetoEletrico from "./pages/services/projetos_eletricos/Projetos_eletricos"
import ProjetoEnergiaSolar from "./pages/services/energia_solar/Projetos_energia_solar"
import ProjetoSpda from "./pages/services/projeto_spda/Projeto_spda"
import Contact from './pages/contact/Contact'
import About from "./pages/about/About"
import Home from "./pages/home/Home"

function App() {
    return (
        <TemplateDefault>
            <Router>
                <Routes>
                    <Route path="/projeto_spda" element={<ProjetoSpda />} />
                    <Route path="/projeto_energia_solar" element={<ProjetoEnergiaSolar />} />
                    <Route path="/projetos_eletricos" element={<ProjetoEletrico />} />
                    <Route path="/alvara_de_funcionamento" element={<Alvara />} />
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
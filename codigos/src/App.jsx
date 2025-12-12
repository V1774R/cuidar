import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"
import { ContextoProvider } from "./context"
import { Buscar } from "./pages/buscar"
import { useEffect } from "react"
import { NotFound } from "./pages/notFound"
import { RotaProtegida } from "./components/rotaProtegida"
import { ArvoreDecisao } from "./components/arvoreDecisao"
import { Perfil } from "./pages/perfil"
import { Gestao } from "./pages/gestao"
import { Emergencia } from "./pages/emergencia"
import { Configuracoes } from "./pages/configuracoes"
import { Suporte } from "./pages/suporte"





function App() {

  return (
    <ContextoProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<RotaProtegida><Home /></RotaProtegida>}></Route>
            <Route path="/busca" element={<RotaProtegida><Buscar /></RotaProtegida>}></Route>
            <Route path="/ajuda" element={<ArvoreDecisao />}></Route>
            <Route path="/perfil" element={<RotaProtegida><Perfil /></RotaProtegida>}></Route>
            <Route path="/gestao" element={<RotaProtegida><Gestao /></RotaProtegida>}></Route>
            <Route path="/emergencia" element={<Emergencia />}></Route>
            <Route path="/configuracao" element={<RotaProtegida><Configuracoes /></RotaProtegida>}></Route>
            <Route path="/suporte" element={<Suporte />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextoProvider>
  )
}

export default App

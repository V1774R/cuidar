import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/layout"
import { ContextoProvider } from "./context"
import { Buscar } from "./pages/buscar"
import { useEffect } from "react"
import { NotFound } from "./pages/notFound"
import { RotaProtegida } from "./components/rotaProtegida"
import { ArvoreDecisao } from "./components/arvoreDecisao"





function App() {

  return (
    <ContextoProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route index element={<RotaProtegida><Home /></RotaProtegida>}></Route>
            <Route path="/busca" element={<RotaProtegida><Buscar /></RotaProtegida>}></Route>
            <Route path="/ajuda" element={<ArvoreDecisao />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextoProvider>
  )
}

export default App

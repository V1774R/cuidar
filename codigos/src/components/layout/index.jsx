import { Outlet } from "react-router-dom"
import { Cabecalho } from "../cabecalho"
import { GlobalStyles } from "../globalStyles"
import { Menu } from "../menu"
import { useContext } from "react"
import { Contexto } from "../../context"
import { LoginForm } from "../loginForm"
import { MenuSuperior } from "../menuSuperior"


export const Layout = () => {

    return(
        <>
            <GlobalStyles />
            <MenuSuperior />
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <Menu />     
        </>
    )
}
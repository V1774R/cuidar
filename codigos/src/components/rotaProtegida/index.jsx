import { useContext } from "react"
import { Contexto } from "../../context"
import { LoginForm } from "../loginForm"

export const RotaProtegida = ({ children }) => {
    const { state } = useContext(Contexto)

    if(!state.isLoggedIn){
        return <LoginForm />
    }

    return children
}
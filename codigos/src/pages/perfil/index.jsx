import { useContext } from "react"
import { CardAluno } from "../../components/cardAluno"
import { CardUsuario } from "../../components/cardUsuario"
import { Contexto } from "../../context"

export const Perfil = () => {

    const {state} = useContext(Contexto)

    return(
        <CardUsuario usuario={state?.user}/>
    )
}
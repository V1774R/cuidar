import { useContext } from "react"
import styled from "styled-components"
import { Contexto } from "../../context"

const Area = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 16px;
    background-color: var(--azul);
    color: #dfdfdf;

`


export const SubMenu = () => {

    const {state, dispatch} = useContext(Contexto)
    console.log(state)
    return (
        <Area>
            <p>Olá, {state.user != null ? state.user.nome : "Usuário"} </p>
        </Area>
    )
}
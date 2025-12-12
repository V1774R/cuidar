import React, { useContext } from "react";
import styled from "styled-components";
import { Contexto } from "../../context";

const Botao = styled.div`
    width: 30px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 20;
    
`;

const Bar = styled.span`
    margin: 2px;
    height: 6px;
    width: 100%;
    background-color: #0c345a;
    border-radius: 2px;
`;

export const BotaoMenu = () => {

    const {state, dispatch} = useContext(Contexto)

    return (
        <Botao onClick={()=>{dispatch({type: "ALTERNAR_MENU_SUPERIOR"})}}>
            <Bar />
            <Bar />
            <Bar />
        </Botao>
    )
}

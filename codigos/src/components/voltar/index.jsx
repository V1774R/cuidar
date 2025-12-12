import { FaArrowLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    background-color: transparent;
    border: none;
    color: var(--texto);
    font-size: 32px; /* aumenta o tamanho da seta */
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`

export const BotaoVoltar = () => {
    const navigate = useNavigate()

    return (
        <BotaoEstilizado onClick={() => navigate(-1)}>
            <FaArrowLeft />
        </BotaoEstilizado>
    )
}

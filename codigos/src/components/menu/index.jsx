import styled from "styled-components"
import { FaFirstAid, FaHome, FaSearch, FaUserShield } from "react-icons/fa"
import { Link } from "react-router-dom"

const NavEstilizada = styled.nav`
    width: 100vw;
    height: 80px;
    background-color: #685252;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

const Botao = styled.p`
    background-color: var(--azul);
    flex-grow: 1;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px; /* espaço entre ícone e texto */
    margin: 1px;
    opacity: 1;
    transition: 300ms;
    color: var(--texto2);
    font-size: 1rem;
    &:hover{
        opacity: 0.85;
        transition: 300ms;
    }
`

const MenuItem = styled(Link)`
    text-decoration: none;
    flex-grow: 1;
    flex: 1;
    height: 100%; 
`



export const Menu = () => {
    return (
        <NavEstilizada>
            <MenuItem to={"/"}>
                <Botao><FaHome /> Início</Botao>
            </MenuItem>
            {/* <Botao><FaUserShield /> Adm</Botao> */}
            <MenuItem to={"/busca"}>
                <Botao><FaSearch /> Buscar</Botao>
            </MenuItem>
            <MenuItem to={"/ajuda"}>
                <Botao><FaFirstAid /> Ajuda </Botao>
            </MenuItem>            
        </NavEstilizada>
    )
}

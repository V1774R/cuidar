import styled from 'styled-components'
import { SubMenu } from '../subMenu'
import { BotaoMenu } from '../botaoMenu'

const HeaderEstilizado = styled.header`
    width: 100vw;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 16px;
    /* background-color: var(--azul); */
    h1{
        color: var(--texto2);
    }
`

export const Cabecalho = ({ src, alt }) => {
    return (
        <>
            <HeaderEstilizado>
                {/* {src && alt ? (<img src={src} alt={alt} />) : (
                    <h1>Cuidar</h1>
                )} */}
                <BotaoMenu />
            </HeaderEstilizado>        
            <SubMenu />
        </>
    )
}
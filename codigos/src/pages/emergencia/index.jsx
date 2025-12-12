import styled from "styled-components"


const Container = styled.div`
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
`

const Titulo = styled.h1`
    text-align: center;
    margin-bottom: 10px;
`

const Subtitulo = styled.p`
    text-align: center;
    color: #555;
    margin-bottom: 20px;
`

const Lista = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Botao = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    background: #e53935;
    color: white;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #c62828;
    }
`

const BotaoSecundario = styled.a`
    display: block;
    text-decoration: none;
    text-align: center;
    padding: 14px;
    border-radius: 8px;
    background: #4a90e2;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background: #3a78c2;
    }
`

export const Emergencia = () => {
    return (
        <Container>
            <Titulo>Telefones de Emergência</Titulo>
            <Subtitulo>Toque para ligar imediatamente</Subtitulo>

            <Lista>
                <Botao href="tel:192">SAMU – 192</Botao>
                <Botao href="tel:193">Bombeiros – 193</Botao>
                <BotaoSecundario href="tel:190">Polícia – 190</BotaoSecundario>
                <BotaoSecundario href="tel:199">Defesa Civil – 199</BotaoSecundario>
                <BotaoSecundario href="tel:136">Disque Saúde – 136</BotaoSecundario>
            </Lista>
        </Container>
    )
}

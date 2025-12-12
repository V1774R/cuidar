import styled from "styled-components"

/* ---------------------- STYLES ---------------------- */

const Container = styled.div`
    max-width: 600px;
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
    margin-bottom: 25px;
`

const Card = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 18px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`

const CardTitulo = styled.h3`
    margin: 0 0 10px 0;
    color: #333;
`

const Texto = styled.p`
    margin: 6px 0;
    color: #444;
`

const Botao = styled.a`
    display: inline-block;
    margin-top: 10px;
    padding: 10px 16px;
    border-radius: 8px;
    background: #4a90e2;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
        background: #3a78c2;
    }
`

/* ---------------------- COMPONENTE ---------------------- */

export const Suporte = () => {
    return (
        <Container>
            <Titulo>Suporte</Titulo>
            <Subtitulo>Como podemos ajudar você hoje</Subtitulo>

            <Card>
                <CardTitulo>Dúvidas sobre o sistema</CardTitulo>
                <Texto>Se algo não estiver funcionando como esperado, entre em contato com o suporte técnico.</Texto>
                <Texto><strong>Email:</strong> suporte@escola.com</Texto>
                <Texto><strong>WhatsApp:</strong> (81) 90000-0000</Texto>
            </Card>

            <Card>
                <CardTitulo>Problemas de acesso</CardTitulo>
                <Texto>Esqueceu a senha ou não consegue entrar no sistema</Texto>
                <Botao href="mailto:suporte@escola.com">Solicitar ajuda</Botao>
            </Card>

            <Card>
                <CardTitulo>Primeiros Socorros</CardTitulo>
                <Texto>Para emergências reais, utilize a página de emergência ou ligue imediatamente para o SAMU (192).</Texto>
                <Botao href="/emergencia">Ir para Emergência</Botao>
            </Card>

            <Card>
                <CardTitulo>Reportar um erro</CardTitulo>
                <Texto>Encontrou um bug ou algo estranho no sistema</Texto>
                <Botao href="mailto:dev@escola.com">Reportar problema</Botao>
            </Card>
        </Container>
    )
}

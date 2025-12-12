import styled from "styled-components"

/* ---------------------- STYLES ---------------------- */

const Container = styled.div`
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    font-family: Arial, sans-serif;
`

const Titulo = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
`

const Card = styled.a`
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
`

const CardTitulo = styled.h3`
    margin: 0 0 10px 0;
    font-size: 18px;
    color: #4a90e2;
`

const CardDescricao = styled.p`
    margin: 0;
    font-size: 14px;
    color: #555;
`

/* ---------------------- COMPONENTE ---------------------- */

export const Gestao = () => {
    return (
        <Container>
            <Titulo>Gestão do Sistema</Titulo>

            <Grid>
                <Card>
                    <CardTitulo>Gerenciar Usuários</CardTitulo>
                    <CardDescricao>Adicionar, editar e visualizar funcionários</CardDescricao>
                </Card>

                <Card>
                    <CardTitulo>Gerenciar Alunos</CardTitulo>
                    <CardDescricao>Cadastro, turmas e informações gerais</CardDescricao>
                </Card>

                <Card>
                    <CardTitulo>Emergência</CardTitulo>
                    <CardDescricao>Acessar telefones e protocolos</CardDescricao>
                </Card>

                <Card>
                    <CardTitulo>Suporte</CardTitulo>
                    <CardDescricao>Ajuda, dúvidas e contato técnico</CardDescricao>
                </Card>
            </Grid>
        </Container>
    )
}

import styled from "styled-components"


const Container = styled.div`
    padding: 24px;
    border-radius: 12px;
    background: #f7f7f7;
    max-width: 450px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.08);
`

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
`

const Avatar = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: #4a90e2;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
`

const Nome = styled.h2`
    margin: 0;
`

const Cargo = styled.p`
    margin: 0;
    color: #555;
    font-size: 14px;
`

const Section = styled.div`
    background: #fff;
    padding: 14px;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h3`
    margin: 0 0 8px 0;
    font-size: 16px;
    color: #333;
`

const Status = styled.p`
    text-align: center;
    margin-top: 10px;
    font-weight: bold;
    color: ${({ ativo }) => (ativo ? "green" : "red")};
    font-size: 16px;
`


export const CardUsuario = ({ usuario }) => {
    if (!usuario) {
        return <p>Nenhum usuário selecionado.</p>
    }

    return (
        <Container>
            <Header>
                <Avatar>
                    {usuario.nome[0]}
                </Avatar>
                <div>
                    <Nome>{usuario.nome}</Nome>
                    <Cargo>{usuario.cargo}</Cargo>
                </div>
            </Header>

            <Section>
                <SectionTitle>Identificação</SectionTitle>
                <p><strong>Matrícula:</strong> {usuario.matricula}</p>
                <p><strong>CPF:</strong> {usuario.cpf || "—"}</p>
                <p><strong>Setor:</strong> {usuario.setor}</p>
            </Section>

            <Section>
                <SectionTitle>Contato</SectionTitle>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Telefone:</strong> {usuario.telefone || "—"}</p>
            </Section>

            <Section>
                <SectionTitle>Lei Lucas</SectionTitle>
                <p><strong>Capacitado:</strong> {usuario.primeirosSocorros.capacitado ? "Sim ✅" : "Não ❌"}</p>
                <p><strong>Data do Curso:</strong> {usuario.primeirosSocorros.dataCurso || "—"}</p>
                <p><strong>Validade:</strong> {usuario.primeirosSocorros.validade || "—"}</p>
            </Section>

            <Status ativo={usuario.ativo}>
                <strong>Status:</strong> {usuario.ativo ? "Ativo ✅" : "Inativo ❌"}
            </Status>
        </Container>
    )
}

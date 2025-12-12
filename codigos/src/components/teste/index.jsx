import { useState } from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  background-color: #f5f7fa;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Navbar = styled.div`
  background: #1e3a5f; /* azul profundo */
  color: #fff;
  padding: 15px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  flex-shrink: 0;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  background: #4caf50; /* verde saúde */
  color: #fff;
  border: none;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #3d8b40;
  }
`;

const Card = styled.div`
  background: #fff;
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: #1e3a5f; /* azul profundo */
  color: #fff;
  padding: 15px;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  padding: 15px;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 15px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 8px;
  color: #1e3a5f; /* azul profundo */
  font-size: 1rem;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 4px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const InfoItem = styled.div`
  background: #eef3f8; /* cinza azulado suave */
  padding: 10px;
  border-radius: 8px;
  font-size: 0.9rem;
`;

const Label = styled.span`
  font-weight: bold;
  color: #1e3a5f;
`;

const Value = styled.span`
  margin-left: 6px;
  color: #555;
`;

const BottomNav = styled.div`
  background: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  flex-shrink: 0;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: #1e3a5f;
  cursor: pointer;
`;

export default function StudentPrototype() {
  const [showCard, setShowCard] = useState(false);

  return (
    <PageWrapper>
      <Navbar>Sistema Escolar</Navbar>
      <ContentArea>
        {!showCard ? (
          <Button onClick={() => setShowCard(true)}>🔍 Buscar aluno</Button>
        ) : (
          <Card>
            <Header>João Silva</Header>
            <Content>
              <Section>
                <SectionTitle>Dados Pessoais</SectionTitle>
                <InfoGrid>
                  <InfoItem><Label>Idade:</Label> <Value>12 anos</Value></InfoItem>
                  <InfoItem><Label>Série:</Label> <Value>7º Ano</Value></InfoItem>
                  <InfoItem><Label>Plano:</Label> <Value>Unimed</Value></InfoItem>
                </InfoGrid>
              </Section>

              <Section>
                <SectionTitle>Informações Médicas</SectionTitle>
                <InfoGrid>
                  <InfoItem><Label>Alergias:</Label> <Value>Amendoim</Value></InfoItem>
                  <InfoItem><Label>Medicamentos:</Label> <Value>Astemizol</Value></InfoItem>
                  <InfoItem><Label>Condições:</Label> <Value>Asma</Value></InfoItem>
                </InfoGrid>
              </Section>

              <Section>
                <SectionTitle>Contato dos Responsáveis</SectionTitle>
                <InfoGrid>
                  <InfoItem><Label>Pai:</Label> <Value>Carlos Silva - (81) 99999-8888</Value></InfoItem>
                  <InfoItem><Label>Mãe:</Label> <Value>Ana Souza - (81) 98888-7777</Value></InfoItem>
                </InfoGrid>
              </Section>
            </Content>
          </Card>
        )}
      </ContentArea>
      <BottomNav>
        <NavItem>🏫<span>Alunos</span></NavItem>
        <NavItem>🩺<span>Atendimentos</span></NavItem>
        <NavItem>⚙️<span>Configurações</span></NavItem>
      </BottomNav>
    </PageWrapper>
  );
}

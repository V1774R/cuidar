import { useState } from "react"
import styled from "styled-components"

const Card = styled.div`
    background: linear-gradient(135deg, #ffffff, #f9f9f9);
    border-radius: 16px;
    padding: 24px;
    width: 100%;
    box-shadow: 0 6px 14px rgba(0,0,0,0.12);
    font-family: "Segoe UI", Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #0077b6;
    padding-bottom: 12px;
`

const Nome = styled.h2`
    margin: 0;
    color: var(--azul);
    font-size: 22px;
    font-weight: 700;
`

const SubInfo = styled.div`
  font-size: 14px;
  color: var(--azul);
  display: flex;
  flex-direction: column;
  gap: 4px; /* espaço entre os <p> */

  p {
    margin: 0; /* remove margens padrão */
    padding: 2px 0;
    line-height: 1.4;
    
    /* opcional: dar leve destaque ao label */
    font-weight: 500;
    
    /* se quiser diferenciar o valor */
    span {
      font-weight: 400;
      color: var(--cinza-escuro);
    }
  }
`;


const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Label = styled.span`
    font-weight: 600;
    color: #333;
`

const Info = styled.div`
    font-size: 14px;
    color: #444;
    background-color: #f1f5f9;
    padding: 8px 12px;
    border-radius: 8px;
`

const Critico = styled(Info)`
    background-color: #ffebeb;
    color: #d00000;
    font-weight: 700;
    
`

export const CardAluno = ({ aluno }) => {
    if (!aluno) return null
    const [aberto, setAberto] = useState(false)

    return (
        <Card>
            <Header onClick={() => setAberto(!aberto)}>
                <Nome>{aluno.nome}</Nome>
                <SubInfo>
                    <p>Idade: <span>{aluno.idade} anos</span></p>
                    <p>Tipo sanguíneo: <span>{aluno.tipoSanguineo}</span></p>
                    <p>Classe: <span>{aluno.classe}</span></p>
                    <p>Turno: <span>{aluno.turno}</span></p>
                </SubInfo>
            </Header>

            {aberto && (
                <>
                    <Section>
                        <Critico>
                            <Label>🚨 Alergias:</Label>{" "}
                            {aluno.alergias.length > 0 ? aluno.alergias.join(", ") : "Nenhuma"}
                        </Critico>
                        <Critico>
                            <Label>🚨 Doenças:</Label>{" "}
                            {aluno.doencas.length > 0 ? aluno.doencas.join(", ") : "Nenhuma"}
                        </Critico>
                        <Critico>
                            <Label>🚨 Medicações de emergência:</Label>{" "}
                            {aluno.medicacoesEmergencia.length > 0
                                ? aluno.medicacoesEmergencia.join(", ")
                                : "Nenhuma"}
                        </Critico>
                    </Section>

                    <Section>
                        <Info>
                            <Label>💊 Uso contínuo:</Label>{" "}
                            {aluno.remediosUsoContinuo.length > 0
                                ? aluno.remediosUsoContinuo.join(", ")
                                : "Nenhum"}
                        </Info>
                        <Info>
                            <Label>🏥 Plano de saúde:</Label> {aluno.planoSaude}
                        </Info>
                    </Section>

                    <Section>
                        <Info>
                            <Label>📞 Contatos:</Label>

                            {/* Se tiver pai ou mãe, mostra os que existirem */}
                            {(aluno.contatos.pai || aluno.contatos.mae) ? (
                                <>
                                    {aluno.contatos.pai && (
                                        <div><strong>Pai:</strong> {aluno.contatos.pai}</div>
                                    )}
                                    {aluno.contatos.mae && (
                                        <div><strong>Mãe:</strong> {aluno.contatos.mae}</div>
                                    )}
                                </>
                            ) : (
                                /* Se não tiver nenhum dos dois, mostra responsável */
                                <div><strong>Responsável:</strong> {aluno.contatos.responsavel}</div>
                            )}
                        </Info>

                        <Info>
                            <Label>🩺 Médico responsável:</Label> {aluno.contatoMedico}
                        </Info>
                    </Section>



                    <Section>
                        <Info>
                            <Label>📝 Observações:</Label> {aluno.observacoes}
                        </Info>
                    </Section>
                </>
            )}
        </Card>
    )
}

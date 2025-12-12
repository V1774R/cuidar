import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


`

const Title = styled.h1`
    width: 100%;
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 20px;

`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 30px;
`

const Text = styled.p`
    font-size: 1.1rem;
    color: #555;
    max-width: 100%;
    margin-bottom: 20px;
    line-height: 1.2;
    text-align: justify;
`

const Highlight = styled.div`
    margin-top: 30px;
    font-size: 1.3rem;
    font-weight: bold;
    color: #176136;
    text-align: center;
`

export const Home = () => {
    return (
        <Container>
            <Title>Bem-vindos!</Title>
            <Subtitle>Segurança escolar na palma da mão.</Subtitle>
            <Text>
                Nosso objetivo é tornar o atendimento em situações de emergência mais rápido, 
                seguro e acessível dentro das escolas. Inspirado pela Lei Lucas, este sistema 
                oferece uma árvore de decisão prática, que guia passo a passo qualquer funcionário 
                treinado no curso de primeiros socorros.
            </Text>
            <Text>
                Com ele, você tem na palma da mão um apoio claro e simples para agir 
                corretamente diante de imprevistos, garantindo mais segurança às crianças 
                e tranquilidade para toda a comunidade escolar.
            </Text>
            <Text>
                Este sistema não substitui profissionais de saúde, mas garante que cada escola 
                esteja preparada para agir com segurança e responsabilidade. Com uma interface 
                simples e prática, qualquer funcionário pode seguir o passo a passo e oferecer 
                o melhor atendimento possível em situações de emergência.
            </Text>
            <Highlight>
                Juntos, cuidamos melhor das nossas crianças!
            </Highlight>
        </Container>
    )
}

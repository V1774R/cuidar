import styled from 'styled-components'
import { FaTools } from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
`

const Icon = styled.div`
    font-size: 5rem;
    color: #ff9800;
    margin-bottom: 20px;
`

const Title = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
`

const Text = styled.p`
    font-size: 1.2rem;
    color: #555;
`

export const EmConstrucao = () => {
    return (
        <Container>
            <Icon><FaTools /></Icon>
            <Title>Página em Construção</Title>
            <Text>
                Estamos trabalhando para trazer novidades 🚧  
                Volte em breve para conferir!
            </Text>
        </Container>
    )
}

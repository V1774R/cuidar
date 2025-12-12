import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
`

const Title = styled.h1`
    font-size: 6rem;
    margin: 0;
    color: #ff6b6b;
`

const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin: 10px 0;
    color: #333;
`

const Text = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
    color: #555;
`

const Button = styled(Link)`
    text-decoration: none;
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`

export const NotFound = () => {
    return (
        <Container>
            <Title>404</Title>
            <Subtitle>Ops... Página não encontrada!</Subtitle>
            <Text>
                Parece que você se perdeu no caminho 🚧  
                Mas não se preocupe, você pode voltar para a página inicial.
            </Text>
            <Button to="/">⬅️ Voltar para o início</Button>
        </Container>
    )
}

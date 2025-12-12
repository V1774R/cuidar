import { useState } from "react"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa" // ícone de seta
import steps from "../../utils/arvore.json"

const Card = styled.div`
    background: #fdfdfd;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    text-align: center;
    min-height: calc(100% - 60px);
    overflow: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Question = styled.h3`
    font-size: 1.4rem;
    margin-bottom: 1.5rem;
    color: #34495e;
`

const Button = styled.button`
    background: var(--azul);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
        background: #07629e;
    }
`

const IconButton = styled(Button)`
    width: auto;
    padding: 0.6rem 0.8rem;
    font-size: 1.2rem;
`

const Result = styled.p`
    font-size: 1.2rem;
    color: #27ae60;
    font-weight: bold;
    margin-top: 1rem;
`

export const ArvoreDecisao = () => {
    const [step, setStep] = useState("inicio")
    const [history, setHistory] = useState([])
    const current = steps[step]

    const goToStep = (nextStep) => {
        setHistory((prev) => [...prev, step])
        setStep(nextStep)
    }

    const goBack = () => {
        if (history.length > 0) {
            const lastStep = history[history.length - 1]
            setHistory((prev) => prev.slice(0, -1))
            setStep(lastStep)
        }
    }

    return (
        <Card>
            {current.question && <Question>{current.question}</Question>}
            {current.options && current.options
                .sort((a, b) => a.text.localeCompare(b.text))
                .map((opt, i) => (
                    <Button key={i} onClick={() => goToStep(opt.next)}>
                        {opt.text}
                    </Button>
                ))}
            {current.result && (
                <>
                    <Result>{current.result}</Result>
                    <Button onClick={() => setStep("inicio")}>
                        Voltar ao início
                    </Button>
                </>
            )}
            {step !== "inicio" && (
                <IconButton onClick={goBack}>
                    <FaArrowLeft />
                </IconButton>
            )}
        </Card>
    )
}

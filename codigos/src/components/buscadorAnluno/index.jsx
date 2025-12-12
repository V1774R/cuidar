import { useEffect, useState } from "react"
import styled from "styled-components"
import { CardAluno } from "../cardAluno"
import { useContext } from "react"
import { Contexto } from "../../context"


const Busca = styled.div`
    width: 100%;
    display: flex;
    background-color: none;
    gap: 8px;
`

const Container = styled.div`
    width: 100%;
    min-height: calc(100% - 60px);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    overflow: auto;
    
    &::-webkit-scrollbar{
        display: none;
    }
`

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid var(--azul);
    font-size: 16px;
`

const Button = styled.button`
    width: auto;
    padding: 12px;
    height: 40px;
    border-radius: 8px;
    border: none;
    background-color: var(--azul);
    color: white;
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 24px;
    &:hover {
        background-color: #004080;
    }
`

const Loading = styled.div`
    font-size: 18px;
    color: var(--azul);
    font-weight: bold;
`

const Error = styled.div`
    text-align: center;
    font-size: 16px;
    color: #860c0c;
    font-weight: bold;
`

export const BuscadorAluno = () => {
    const { state, dispatch } = useContext(Contexto)
    const [busca, setBusca] = useState("")
    const [alunoEncontrado, setAlunoEncontrado] = useState(state.dbAlunos) // já mostra todos ao carregar
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")

    const handleSearch = () => {
        busca.length > 0 && fazerEfeitoCarregando()
        if (busca.trim() === "") {
            setAlunoEncontrado(state.dbAlunos) // mostra todos se não houver busca
            setErro("")
            return
        }

        setAlunoEncontrado([])
        setErro("")

        const resultado = state.dbAlunos.filter(
            (aluno) => aluno.nome.toLowerCase().includes(busca.toLowerCase())
        )
        if (resultado.length > 0) {
            setAlunoEncontrado(resultado)
            setErro("")
        } else {
            setAlunoEncontrado([])
            setErro("Nenhum aluno encontrado com esse nome.")
        }


    }

    const fazerEfeitoCarregando = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, [700])
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    useEffect(() => {
        busca.length == 0 && setAlunoEncontrado(state.dbAlunos)
    }, [busca])

    return (
        <>
            <Busca>
                <Input
                    type="search"
                    placeholder="Digite o nome do aluno..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <Button onClick={handleSearch}>Buscar</Button>
            </Busca>        
            <Container>
                {loading && <Loading>🔄 Carregando...</Loading>}
                {!loading && alunoEncontrado.length > 0 && alunoEncontrado.sort((a, b) => a.nome.localeCompare(b.nome)).map((aluno, index) => (
                    <CardAluno key={index} aluno={aluno} />
                ))}
                {!loading && alunoEncontrado.length === 0 && erro && <Error>{erro}</Error>}
            </Container>        
        </>
    )
}

